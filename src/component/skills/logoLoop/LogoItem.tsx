import { motion } from "framer-motion";

type LogoItemProps = {
  Logo: React.ComponentType<{ className?: string }>;
  title: string;
  descList: string[];
  onHover: (data: {
    visible: true;
    x: number;
    y: number;
    title: string;
    descList: string[];
  }) => void;
  onLeave: () => void;
};

export default function LogoItem({
  Logo,
  title,
  descList,
  onHover,
  onLeave,
}: LogoItemProps) {
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    onHover({
      visible: true,
      x: rect.left + rect.width,
      y: rect.top - 100,
      title,
      descList,
    });
  };

  return (
    <>
      <motion.div
        key={title}
        whileHover={{
          scale: 1.2,
          y: -8,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
        className="
          relative
          flex h-14 w-14
          items-center justify-center

          rounded-[16px]
          border border-black/10

          bg-white/60
          backdrop-blur-xl

          shadow-[0_4px_12px_rgba(0,0,0,0.08)]

          transition-colors
          hover:bg-white/80
        "
        onMouseEnter={handleEnter}
        onMouseLeave={onLeave}
      >
        <Logo className={`size-10`} />
      </motion.div>
    </>
  );
}
