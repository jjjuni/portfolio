import Lenis from "lenis";
import { useEffect, useRef, useCallback } from "react";

export default function useLenisScroll(
  ref?: React.RefObject<HTMLElement | null>,
) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafId = useRef<number | null>(null);
  const isRunning = useRef(false);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (e.shiftKey) {
      lenisRef.current?.stop();
    } else {
      lenisRef.current?.start();
    }
  }, []);

  const handleTouch = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  const startRaf = useCallback(() => {
    if (!lenisRef.current || isRunning.current) return;

    isRunning.current = true;

    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };

    rafId.current = requestAnimationFrame(raf);
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });
  }, [handleWheel, handleTouch]);

  const stopRaf = useCallback(() => {
    isRunning.current = false;

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }

    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("touchstart", handleTouch);
    lenisRef.current?.stop();
  }, [handleWheel, handleTouch]);

  useEffect(() => {
    const options: ConstructorParameters<typeof Lenis>[0] = {
      duration: 1.2,
      smoothWheel: true,
    };

    if (ref?.current) {
      options.wrapper = ref.current;
      options.content = ref.current;
    }

    const lenis = new Lenis(options);
    lenisRef.current = lenis;

    startRaf();

    return () => {
      stopRaf();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [ref, startRaf, stopRaf]);

  return {
    stop: stopRaf,
    start: startRaf,
    lenisRef,
  };
}