import { motion } from "framer-motion";
import { GithubIcon } from "../../assets/svgs";
import useToggleStore from "../../stores/useToggleStore";
import { useEffect, useMemo, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { throttle, type DebouncedFuncLeading } from 'lodash';
import { HEADER_TOGGLE_LIST } from "../../constants/Header";
import { useScrollSection } from "../../hooks/useScrollSection";
import { headerTriggerConfig } from "../../utils/gsap/triggerConfig";
import { headerTimeline } from "../../utils/gsap/timeLine";
import Lenis from "lenis";

const toggleClass = 'w-fit h-full px-2 text-center cursor-pointer text-black opacity-60 hover:opacity-100 transition-300 text-[14px] content-center';
const currentToggleClass = 'text-[24px] -translate-y-0.5 !text-white';

const scrollToTrigger = (id: string, appearRatio: number, lenisRef: React.RefObject<Lenis | null>) => {
  const trigger = ScrollTrigger.getById(id)!;

  const appearPoint = trigger.start + (trigger.end - trigger.start) * appearRatio;

  const lenis = lenisRef.current;

  if (lenis !== null) {
    lenis.scrollTo(appearPoint, {
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 2),
    });
  }
};

type HeaderToggleProps = {
  title: string;
  id: string;
  appearRatio: number;
  currentToggle: string;
  handleToggle: DebouncedFuncLeading<(id: string, appearRatio: number) => void>;
}

const HeaderToggle = ({
  title,
  id,
  appearRatio,
  currentToggle,
  handleToggle,
}: HeaderToggleProps) => {

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEnabled(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`header-toggle ${toggleClass} ${currentToggle === title ? `${currentToggleClass}` : ``} ${!enabled && `pointer-events-none`}`}
      onClick={() => handleToggle(id, appearRatio)}>
      {title}.
    </div>
  )
}

type InitialTitleProps = {
  text: string;
  direction?: "start" | "end"
}

const InitialTitle = ({
  text,
  direction
}: InitialTitleProps) => {

  const xPos = direction === "end" ? -200 : 200

  return (
    <motion.p
      animate={{ x: [-xPos, xPos / 4], opacity: [0, 0.6] }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 1],
      }}
      className={`initial-title font-extrabold text-8xl tracking-tighter truncate px-10 ${direction === "end" ? "text-end" : "text-start"}`}>
      {text}
    </motion.p>
  )
}

export default function Header({ lenisRef }: { lenisRef: React.RefObject<Lenis | null> }) {

  const {
    currentToggle,
    setCurrentToggle
  } = useToggleStore();

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setCurrentToggle("HEADER");
    const t = setTimeout(() => setEnabled(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useScrollSection({
    ...headerTriggerConfig,
    onEnter: () => { setCurrentToggle("HEADER") },
    onLeave: () => { setCurrentToggle("ABOUT") },
    buildTimeline: headerTimeline,
  });

  const handleThrottledToggle = useMemo(
    () =>
      throttle((id: string, appearRatio: number) => {
        scrollToTrigger(id, appearRatio, lenisRef);
      }, 1000, { leading: true, trailing: false }),
    [setCurrentToggle]
  );

  useEffect(() => {
    return () => handleThrottledToggle.cancel();
  }, [handleThrottledToggle]);

  return (
    <div
      id="Header"
      className={`h-screen w-screen overflow-hidden bg-sidebar-bg z-50 fixed`}>
      <div
        id="HeaderBg"
        className={`w-full h-full z-50 bg-cover bg-[url('/background.png')]`}>

      </div>
      <motion.div
        className={`initial-header center-absolute text-black text-2xl font-light text-center w-full`}>
        <InitialTitle text="INTUITIVE" direction="start" />
        <InitialTitle text="DETAIL-DRIVEN" direction="end" />
        <InitialTitle text="PERFORMANCE" direction="start" />
        <InitialTitle text="RESPONSIVE" direction="end" />

        <motion.p
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 1 }}
          className={`pt-4`}>프론트엔드 개발자 <span className={`font-bold`}>이준희</span> 입니다.</motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{ opacity: 1, pointerEvents: "auto" }}
        transition={{
          delay: 1.5,
          duration: 0.5,
          ease: "easeInOut"
        }}
        className={`w-full h-[80px] fixed bottom-0 flex flex-row justify-between items-center text-title font-bold select-none px-10`}>

        <div className={`h-full flex flex-row items-center`}>
          {HEADER_TOGGLE_LIST.map((item) => (
            <HeaderToggle
              key={item.title}
              title={item.title}
              appearRatio={item.appearRatio}
              id={item.id}
              currentToggle={currentToggle}
              handleToggle={handleThrottledToggle} />
          ))}
        </div>

        <div
          className={`github-icon text-xl text-center cursor-pointer group relative w-fit h-10 flex flex-row items-center gap-1 p-1 text-black transition-300 rounded-[6px] opacity-60 hover:opacity-100 ${!enabled && `pointer-events-none`}`}
          onClick={() => window.open('https://github.com/jjjuni')}>
          <GithubIcon className={`w-full h-full block transition-300`} />
        </div>
      </motion.div>
    </div>
  )
}
