import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BootScreenProps {
  children: React.ReactNode;
}

export default function BootScreen({ children }: BootScreenProps) {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isBooting ? 0 : 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>

      {/* Boot Screen */}
      <AnimatePresence>
        {isBooting && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              flex-col
              items-center
              justify-center
              bg-black
            "
          >
            {/* Background */}
            <div
              className="
                absolute
                inset-0
                bg-[url('/background.png')]
                bg-cover
                opacity-20
              "
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="text-[72px] leading-none text-white z-10 flex flex-col items-center gap-5"
            >
              <div
                className={`rounded-full size-24 bg-white/80 flex justify-center items-center`}
              >
                <img src={"/mimo.png"} className={`size-20`} />
              </div>

              <div className={`text-18-20 font-abel`}>Junhee`s Portfolio</div>
            </motion.div>

            {/* Progress Bar */}
            <div className="mt-10 h-1.5 w-48 overflow-hidden rounded-full bg-white/20 z-10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.6,
                  delay: 0.4,
                  ease: "easeInOut",
                }}
                className="h-full rounded-full bg-white"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
