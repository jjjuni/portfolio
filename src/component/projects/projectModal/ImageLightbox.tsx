import { AnimatePresence, motion, type Variants } from "framer-motion";
import SliderNavButtons from "./SliderNavButtons";
import SliderDots from "./SliderDots";
import { type MouseEvent } from "react";

type Props = {
  images: string[];
  currentIndex: number;
  direction: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: (e: MouseEvent) => void;
  onNext: (e: MouseEvent) => void;
  onDotClick: (index: number, e: MouseEvent) => void;
  variants: Variants;
};

const ImageLightbox = ({
  images,
  currentIndex,
  direction,
  isOpen,
  onClose,
  onPrev,
  onNext,
  onDotClick,
  variants,
}: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#000000f5] flex items-center justify-center cursor-default"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <div
            className="relative w-full h-full flex items-center justify-center group"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.img
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                src={images[currentIndex]}
                alt="Enlarged project"
                className="relative z-10 max-w-[90%] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            <SliderNavButtons onPrev={onPrev} onNext={onNext} variant="lightbox" />

            <SliderDots
              items={images}
              currentIndex={currentIndex}
              onClick={onDotClick}
              className="absolute bottom-8 z-20"
            />

            <button
              className="absolute top-8 right-8 z-20 text-white text-5xl hover:text-[#9C9C9C] transition-colors leading-none cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              &times;
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
