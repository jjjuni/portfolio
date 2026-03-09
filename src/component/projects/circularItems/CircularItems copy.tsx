import React, { ReactNode, useEffect, useMemo, useRef } from "react";

type Item = {
  id?: string | number;
  image?: string;
  text?: string;
  [key: string]: unknown;
};

type Props = {
  items?: Item[];

  /** ✅ 앞면 렌더 (이벤트 자유) */
  renderFront: (item: ProjectType) => ReactNode;
  /** ✅ 뒷면 렌더 (없으면 기본 BACK 카드) */
  renderBack?: (item: ProjectType) => ReactNode;

  scrollSpeed?: number;
  scrollEase?: number;

  cardWidth?: number;
  cardHeight?: number;
  gap?: number;

  /** 호(arc) */
  arcCurvature?: number;      // px
  arcRadiusFactor?: number;   // 0.4~0.9
  arcRotateDeg?: number;      // z-rotation
  centerScale?: number;       // 1~1.15

  /** ✅ Hover flip */
  flipDuration?: number;      // lerp speed 느낌 (0.08~0.18 추천)
  flipPerspective?: number;   // px, 800~1400 추천
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function wrap(min: number, max: number, v: number) {
  const range = max - min;
  if (range === 0) return min;
  return ((((v - min) % range) + range) % range) + min;
}
function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function InfiniteLoopArcFlipGallery({
  items,
  renderFront,
  renderBack,
  scrollSpeed = 2,
  scrollEase = 0.08,
  cardWidth = 360,
  cardHeight = 260,
  gap = 60,
  arcCurvature = 200,
  arcRadiusFactor = 0.6,
  arcRotateDeg = 20,
  centerScale = 1,
  flipDuration: flipSpeed = 0.08,
  flipPerspective = 1100,
}: Props) {
  const baseItems = useMemo<Item[]>(() => {
    if (items?.length) return items;
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i + 1,
      text: `Card ${i + 1}`,
    }));
  }, [items]);

  const railItems = useMemo(() => baseItems.concat(baseItems, baseItems), [baseItems]);

  const containerRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  // arc wrapper refs (raf에서 translateY/rotateZ/scale 적용)
  const itemOuterRefs = useRef<Array<HTMLDivElement | null>>([]);
  // flipper refs (raf에서 rotateY 적용)
  const itemFlipperRefs = useRef<Array<HTMLDivElement | null>>([]);

  // hover 상태(타겟/현재) - raf에서 보간
  const flipTargetRef = useRef<number[]>([]);
  const flipCurrentRef = useRef<number[]>([]);

  // scroll physics
  const scrollRef = useRef({
    current: 0,
    target: 0,
    last: 0,
    ease: scrollEase,
    isDown: false,
    startX: 0,
    startTarget: 0,
  });

  useEffect(() => {
    scrollRef.current.ease = scrollEase;
  }, [scrollEase]);

  const metricsRef = useRef({
    unit: cardWidth + gap,
    cycleWidth: (cardWidth + gap) * baseItems.length,
  });

  useEffect(() => {
    metricsRef.current = {
      unit: cardWidth + gap,
      cycleWidth: (cardWidth + gap) * baseItems.length,
    };
  }, [cardWidth, gap, baseItems.length]);

  // wheel/drag
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (!e.shiftKey) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      scrollRef.current.target += (delta > 0 ? scrollSpeed : -scrollSpeed) * 18;
    };

    const onDown = (e: MouseEvent | TouchEvent) => {
      scrollRef.current.isDown = true;
      scrollRef.current.startTarget = scrollRef.current.target;
      scrollRef.current.startX = "touches" in e ? e.touches[0].clientX : e.clientX;
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!scrollRef.current.isDown) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const dx = scrollRef.current.startX - x;
      scrollRef.current.target = scrollRef.current.startTarget + dx * (scrollSpeed * 1.2);
    };

    const onUp = () => {
      scrollRef.current.isDown = false;
    };

    el.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);

    return () => {
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [scrollSpeed]);

  // init flip arrays when length changes
  useEffect(() => {
    flipTargetRef.current = Array(railItems.length).fill(0);
    flipCurrentRef.current = Array(railItems.length).fill(0);
  }, [railItems.length]);

  // ✅ raf loop: railX + arc transforms + flip transforms
  useEffect(() => {
    let raf = 0;

    const tick = () => {
      const container = containerRef.current;
      const rail = railRef.current;
      if (!container || !rail) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const s = scrollRef.current;
      s.current = lerp(s.current, s.target, s.ease);

      const { unit, cycleWidth } = metricsRef.current;

      // rail translateX
      const wrapped = wrap(-cycleWidth, 0, -s.current);
      const railX = wrapped - cycleWidth;
      rail.style.transform = `translate3d(${railX}px, 0, 0)`;

      // arc 기준
      const centerX = container.clientWidth / 2;
      const radius = Math.max(1, cycleWidth * arcRadiusFactor);

      // speed(선택적으로 flip에 가속감 주고 싶으면 여기 사용 가능)
      // const speed = s.current - s.last;

      for (let i = 0; i < railItems.length; i++) {
        const outer = itemOuterRefs.current[i];
        const flipper = itemFlipperRefs.current[i];
        if (!outer || !flipper) continue;

        // item center X (container 기준)
        const itemCenterX = railX + i * unit + cardWidth / 2;
        const dx = itemCenterX - centerX;

        const t = clamp((dx * dx) / (radius * radius), 0, 1);

        // arc y (위로 볼록)
        const y = -arcCurvature * (1 - t);

        // arc rotateZ
        const rotZ = arcRotateDeg * clamp(dx / radius, -1, 1);

        // center scale
        const sc = lerp(centerScale, 1.0, t);

        outer.style.transform = `translate3d(0, ${y}px, 0) rotate(${rotZ}deg) scale(${sc})`;

        // flip progress (lerp)
        const target = flipTargetRef.current[i] ?? 0;
        const cur = flipCurrentRef.current[i] ?? 0;
        const next = lerp(cur, target, flipSpeed);
        flipCurrentRef.current[i] = next;

        const rotY = 180 * next;
        flipper.style.transform = `rotateY(${rotY}deg)`;
      }

      s.last = s.current;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [
    railItems.length,
    cardWidth,
    arcCurvature,
    arcRadiusFactor,
    arcRotateDeg,
    centerScale,
    flipSpeed,
  ]);

  const handleEnter = (i: number) => {
    flipTargetRef.current[i] = 1;
  };
  const handleLeave = (i: number) => {
    flipTargetRef.current[i] = 0;
  };

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div
          ref={railRef}
          className="flex"
          style={{
            gap: `${gap}px`,
            paddingLeft: `${gap}px`,
            alignItems: "center",
            willChange: "transform",
          }}
        >
          {railItems.map((item, i) => (
            <div
              key={`${String(item.id ?? "item")}-${i}`}
              ref={(el) => {
                itemOuterRefs.current[i] = el;
              }}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={() => handleLeave(i)}
              style={{
                width: cardWidth,
                height: cardHeight,
                flex: "0 0 auto",
                willChange: "transform",
                transformOrigin: "center center",
              }}
            >
              {/* perspective wrapper */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  perspective: `${flipPerspective}px`,
                }}
              >
                {/* flipper (rotateY는 raf에서 적용) */}
                <div
                  ref={(el) => {
                    itemFlipperRefs.current[i] = el;
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                >
                  {/* front */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {renderFront(item, i)}
                  </div>

                  {/* back */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {renderBack ? (
                      renderBack(item, i)
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 16,
                          background: "#111",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                        }}
                      >
                        BACK
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
