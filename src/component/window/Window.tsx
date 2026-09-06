import { AnimatePresence, motion, useDragControls } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";
import useWindowStore from "../../stores/useWindowStore";
import About from "../about/About";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import WindowTitleBar from "./WindowTitleBar";

export default function Window({
  isOpen,
  setIsOpen,
  title,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string | null;
}) {
  const { activeWindow, setActiveWindow } = useWindowStore();

  const dragControls = useDragControls();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          drag
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          onPointerDown={() => {
            setActiveWindow("window");
          }}
          className={`
            absolute
            flex flex-col
            left-1/2 top-1/2
            h-4/5 w-4/5
            -translate-x-1/2 -translate-y-1/2
            rounded-xl
            border border-white/20

            bg-white/[0.50]

            backdrop-blur-xl

            before:pointer-events-none
            before:absolute
            before:inset-[1px]
            before:rounded-xl
            before:border
            before:border-white/10
            before:content-['']

            after:pointer-events-none
            after:absolute
            after:left-[10%]
            after:right-[10%]
            after:top-0
            after:h-px
            after:bg-white/40
            after:blur-[1px]
            after:content-['']
            shadow-[0_20px_60px_rgba(0,0,0,0.3)]

            ${activeWindow === "window" ? `z-101` : `z-100`}
          `}
        >
          {/* Header */}
          <WindowTitleBar
            title={title}
            dragControls={dragControls}
            setIsOpen={setIsOpen}
          />
          {/* Browser Content */}
          <div className="w-full h-full overflow-auto scrollbar-custom rounded-b-xl">
            {title === "About" ? (
              <About />
            ) : title === "Skills" ? (
              <Skills />
            ) : (
              <Projects />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
