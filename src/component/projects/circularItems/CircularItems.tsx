import { type ReactNode, useEffect, useMemo, useRef } from "react";

type Props = {
  items?: ProjectType[];
  renderItem: (item: ProjectType, index: number) => ReactNode;

  scrollSpeed?: number;
  scrollEase?: number;

  cardWidth?: number;
  cardHeight?: number;
  gap?: number;

  arcCurvature?: number;
  arcRadiusFactor?: number;
  arcRotateDeg?: number;
  centerScale?: number; 
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

export default function CircularItems({
  items,
  renderItem,
  scrollSpeed = 2,
  scrollEase = 0.05,
  cardWidth = 360,
  cardHeight = 240,
  gap = 60,
  arcCurvature = 300,
  arcRadiusFactor = 1,
  arcRotateDeg = 20,
  centerScale = 1,
}: Props) {
  const baseItems = useMemo<ProjectType[]>(() => {
    if (items?.length) return items;
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i + 1,
      image: `https://picsum.photos/seed/${i + 10}/900/600?grayscale`,
      text: `Card ${i + 1}`,
    }));
  }, [items]);

  const railItems = useMemo(() => baseItems.concat(baseItems, baseItems), [baseItems]);

  const containerRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

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

  // Wheel / Drag
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

      // arc 계산 기준
      const centerX = container.clientWidth / 2;
      const radius = Math.max(1, cycleWidth * arcRadiusFactor);

      // 아이템별 translateY/rotate/scale 갱신
      for (let i = 0; i < railItems.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;

        // 아이템의 컨테이너 기준 X 위치(아이템 중앙)
        const itemCenterX = railX + i * unit + cardWidth / 2;

        const dx = itemCenterX - centerX; // 중앙 기준 거리
        const t = clamp((dx * dx) / (radius * radius), 0, 1);

        // 위로 볼록
        const y = -arcCurvature * (1 - t);

        // 좌/우 기울기
        const rot = arcRotateDeg * clamp(dx / radius, -1, 1);

        // 중앙 강조
        const sc = lerp(centerScale, 1.0, t);

        el.style.transform = `translate3d(0, ${y}px, 0) rotate(${rot}deg) scale(${sc})`;
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
  ]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden select-none`}>
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
                itemRefs.current[i] = el;
              }}
              className={`translate-y-65 select-none`}
              style={{
                width: cardWidth,
                height: cardHeight,
                flex: "0 0 auto",
                willChange: "transform",
                transformOrigin: "center center",
              }}
            >
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
