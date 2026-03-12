import { debounce } from "lodash";
import { useLayoutEffect } from "react";
import gsap from "../utils/gsap/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type TimelineBuilder = (tl: gsap.core.Timeline) => void;

type ScrollTriggerConfig = {
  trigger: string | HTMLElement;
  start?: string | (() => string);
  end?: string | (() => string);
  scrub?: number | boolean;
  pin?: boolean;
  pinSpacing?: boolean;
  toggleActions?: string;
  markers?: boolean;
  id?: string;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  buildTimeline: TimelineBuilder;
}

export function useScrollSectionList(scrollTriggerList: ScrollTriggerConfig[]) {

  useLayoutEffect(() => {

    let ctx: gsap.Context | null = null;

    const init = () => {
      ctx = gsap.context(() => {
        scrollTriggerList.forEach((scrollTrigger) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              // id: scrollTrigger.id ?? `${scrollTrigger.trigger}-trigger`,
              // trigger: scrollTrigger.trigger,
              // start: scrollTrigger.start ?? "top top",
              // end: scrollTrigger.end ?? "+=100%",
              // scrub: scrollTrigger.scrub ?? false,
              // pin: scrollTrigger.pin ?? false,
              // pinSpacing: scrollTrigger.pinSpacing ?? true,
              // toggleActions: scrollTrigger.toggleActions ?? "play none none reverse",
              // onEnter: scrollTrigger.onEnter,
              // onLeave: scrollTrigger.onLeave,
              id: scrollTrigger.trigger + "-trigger",
              markers: true,
              onEnterBack: scrollTrigger.onEnter,
              ...scrollTrigger,
            },
          });

          scrollTrigger.buildTimeline(tl);
        });
      });
    };

    init();

    const onResize = debounce(() => {
      ctx?.revert();
      ctx = null;
      init();
      ScrollTrigger.refresh();
    }, 150);

    if (navigator.maxTouchPoints === 0)
      window.addEventListener("resize", onResize);

    return () => {
      if (navigator.maxTouchPoints === 0)
        window.removeEventListener("resize", onResize);
      onResize.cancel();
      ctx?.revert();
    };
  }, [scrollTriggerList]);
}


export const useScrollSection = (scrollTrigger: ScrollTriggerConfig) => {

  useLayoutEffect(() => {

    let ctx: gsap.Context | null = null;

    const init = () => {
      ctx = gsap.context(() => {

        const tl = gsap.timeline({
          scrollTrigger: {
            id: scrollTrigger.trigger + "-trigger",
            markers: true,
            onEnterBack: scrollTrigger.onEnter,
            ...scrollTrigger,
          },
        });

        scrollTrigger.buildTimeline(tl);
      });
    };

    init();

    const onResize = debounce(() => {
      ctx?.revert();
      ctx = null;
      init();
      ScrollTrigger.refresh();
    }, 150);

    if (navigator.maxTouchPoints === 0)
      window.addEventListener("resize", onResize);

    return () => {
      if (navigator.maxTouchPoints === 0)
        window.removeEventListener("resize", onResize);
      onResize.cancel();
      ctx?.revert();
    };

  }, []);
}