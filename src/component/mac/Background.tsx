import { motion } from "framer-motion";

export default function Background() {
  return (
    <div
      id="Background"
      className="fixed z-50 h-[100dvh] w-screen overflow-hidden bg-black"
    >
      <div
        id="BackgroundBg"
        className="h-full w-full inset-0 bg-[url('/background.png')] bg-cover opacity-90"
      />

      {/* 하단 어두운 그라데이션 + 블러 */}
      <div
        className="
          pointer-events-none
          fixed bottom-0 left-0 z-40
          h-1/3 w-full
          bg-gradient-to-t from-black/40 via-black/10 to-transparent
          backdrop-blur-[4px]
        "
      />

      <motion.div
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{ opacity: 1, pointerEvents: "auto" }}
        transition={{
          delay: 1.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="
          fixed bottom-0 z-50
          flex h-[80px] w-full
          flex-row items-center justify-between
          px-10
          font-bold text-title
          select-none
          max-md:h-[60px] max-md:px-5
        "
      />
    </div>
  );
}
