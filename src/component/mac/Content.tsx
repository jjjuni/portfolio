import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { FolderDockIcon } from "../../assets/svgs";
import Dock from "./Dock";

const DESKTOP_ICONS = [
  {
    title: "About",
    icon: (
      <img
        src={"/mimo.png"}
        width={40}
        height={40}
        className={`pointer-events-none`}
      />
    ),
    position: "top-20 left-20",
  },
  {
    title: "Skills",
    icon: (
      <div className={`size-10`}>
        <div className={`text-[28px]`}>🛠️</div>
      </div>
    ),
    position: "top-20 left-50",
  },
  {
    title: "Projects",
    icon: (
      <div className={`size-10`}>
        <FolderDockIcon className={`size-10`} />
      </div>
    ),
    position: "top-20 left-80",
  },
];

export default function Content({
  setTitle,
  setIsOpen,
}: {
  setTitle: Dispatch<SetStateAction<string | null>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleClick = (title: string) => {
    setSelectedIcon(title);
  };

  const handleDoubleClick = (title: string) => {
    setSelectedIcon(null);
    setTitle(title);
    setIsOpen(true);
  };

  return (
    <div
      className="relative z-100 h-screen w-screen overflow-hidden"
      onClick={() => setSelectedIcon(null)}
    >
      {DESKTOP_ICONS.map((item) => (
        <motion.div
          key={item.title}
          drag
          dragMomentum={false}
          onPointerDown={(e) => {
            e.stopPropagation();
            handleClick(item.title);
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleClick(item.title);
          }}
          onDoubleClick={() => handleDoubleClick(item.title)}
          className={`
            ${item.position}
          absolute 
          flex cursor-pointer flex-col items-center gap-1 px-2 pb-1.5
            ${selectedIcon === item.title ? "bg-black/5" : ""}
            hover:bg-black/5
            rounded-md transition-colors duration-100
        `}
        >
          <div className={`p-1.5`}>{item.icon}</div>
          <div
            className={`
            rounded-sm px-0.5 text-white leading-[1.2] text-[14px]
          `}
          >
            {item.title}
          </div>
        </motion.div>
      ))}
      <Dock setTitle={setTitle} setIsOpen={setIsOpen} />
    </div>
  );
}
