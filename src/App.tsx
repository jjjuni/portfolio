import { useEffect, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./component/header/Header";
import About from "./component/about/About";
import Projects from "./component/projects/Projects";
import Skills from "./component/skills/Skills";
import useLenisScroll from "./hooks/useLenisScroll";
import Closing from "./component/closing/Closing";
import useModalStore from "./stores/useModalStore";

function App() {

  const { isModalOpen } = useModalStore();

  const { stop, start, lenisRef } = useLenisScroll();

  useLayoutEffect(() => {
    history.scrollRestoration = "manual";

    window.scrollTo(0, 0);

    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      stop();
      document.body.style.overflow = "hidden";
    }
    else {
      start();
      document.body.style.overflow = "";
    }
  }, [isModalOpen])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = originalOverflow || "auto";
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <>
      <div id="page" className="w-screen h-screen select-none">
        <Header lenisRef={lenisRef} />
        <About />
        <Skills />
        <Projects />
        <Closing />
      </div>
      <div id="portal-root" />
    </>
  );
}

export default App;
