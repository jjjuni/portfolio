import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";
import { EmailDockIcon, FolderDockIcon, GithubIcon } from "../../assets/svgs";

export default function Dock({
  setTitle,
  setIsOpen,
}: {
  setTitle: Dispatch<SetStateAction<string | null>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const DOCK_ITEMS = [
    {
      title: "About",
      icon: <img src={"/mimo.png"} width={40} height={40} />,
      onClick: () => {
        setTitle("About");
        setIsOpen(true);
      },
    },
    {
      title: "Skills",
      icon: <div className={`text-[28px]`}>🛠️</div>,
      onClick: () => {
        setTitle("Skills");
        setIsOpen(true);
      },
    },
    {
      title: "Projects",
      icon: <FolderDockIcon width={40} height={40} />,
      onClick: () => {
        setTitle("Projects");
        setIsOpen(true);
      },
    },
    {
      title: "email",
      icon: <EmailDockIcon width={40} height={40} />,
      onClick: () => {
        window.location.assign("mailto:0210leejun@gmail.com");
      },
    },
    {
      title: "github",
      icon: <GithubIcon color={"#2d2d2d"} width={40} height={40} />,
      onClick: () => {
        window.open("https://github.com/jjjuni");
      },
    },
  ];

  return (
    <div
      className="
        fixed bottom-5 left-1/2 z-999
        -translate-x-1/2

        flex items-center

        rounded-[22px]
        border border-white/20

        bg-white/[0.12]

        p-2

        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        backdrop-blur-2xl

        before:pointer-events-none
        before:absolute
        before:inset-[1px]
        before:rounded-[20px]
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
      "
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative flex items-end gap-2">
        {DOCK_ITEMS.map((item) => {
          return (
            <motion.button
              key={item.title}
              type="button"
              whileHover={{
                scale: 1.2,
                y: -8,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={item.onClick}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="
                relative
                flex h-14 w-14
                items-center justify-center

                rounded-2xl

                border border-white/20

                bg-white/[0.15]

                shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)]
                backdrop-blur-xl

                transition-colors
                hover:bg-white/[0.28]
              "
            >
              <span className="drop-shadow-sm">{item.icon}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
