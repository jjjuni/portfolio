import { motion, type PanInfo } from "framer-motion";
import { useState, type MouseEvent } from "react";
import SliderNavButtons from "./SliderNavButtons";
import SliderDots from "./SliderDots";
import ImageLightbox from "./ImageLightbox";
import { useDeviceStore } from "../../../stores/useDeviceStore";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {

  const {
    isTouchDevice
  } = useDeviceStore();

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const paginate = (newDirection: number) => {
    const nextIndex = (currentImgIndex + newDirection + images.length) % images.length;
    setDirection(newDirection);
    setCurrentImgIndex(nextIndex);
  };

  const nextImage = (e?: MouseEvent) => {
    e?.stopPropagation();
    paginate(1);
  };

  const prevImage = (e?: MouseEvent) => {
    e?.stopPropagation();
    paginate(-1);
  };

  const handleDotClick = (index: number, e: MouseEvent) => {
    e.stopPropagation();
    if (index === currentImgIndex) return;
    setDirection(index > currentImgIndex ? 1 : -1);
    setCurrentImgIndex(index);
  }

  const onDragEnd = (_: TouchEvent, { offset, velocity }: PanInfo) => {
    const swipeThreshold = 50;
    const velocityThreshold = 500;

    if (offset.x < -swipeThreshold || velocity.x < -velocityThreshold) {
      paginate(1);
    } else if (offset.x > swipeThreshold || velocity.x > velocityThreshold) {
      paginate(-1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 0 : direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction === 0 ? 0 : direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <div className="w-full flex flex-col items-center gap-5 pt-4">
      <div className={`relative w-full flex`}>
        <div className="relative w-full flex items-center group overflow-hidden rounded-xl">
          <motion.div
            className="flex w-full h-full cursor-pointer gap-5"
            animate={{
              x: `calc(10% - ${currentImgIndex * 80}% - ${currentImgIndex * 20}px)`
            }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 32 },
              opacity: { duration: 0.3 }
            }}
            drag={isTouchDevice ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd} >
            {images.map((img, i) => (
              <div
                key={i}
                className="w-[80%] h-full shrink-0 flex items-center justify-center overflow-hidden rounded-xl touch-pan-y"
                onClick={() => {
                  if (i === currentImgIndex) {
                    setSelectedImage(images[currentImgIndex]);
                    setDirection(0);
                  } else {
                    setCurrentImgIndex(i);
                  }
                }}
              >
                <img
                  src={img}
                  alt={`project-${i}`}
                  className={`w-full h-auto block transition-300 ${i === currentImgIndex ? 'opacity-100' : 'opacity-40'}`}
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
        </div>
        {images.length > 1 && (
          <SliderNavButtons onPrev={prevImage} onNext={nextImage} />
        )}
      </div>
      <SliderDots
        items={images}
        currentIndex={currentImgIndex}
        onClick={handleDotClick}
      />
      <p className="text-[12px] text-[#9C9C9C]">이미지를 클릭하면 크게 볼 수 있습니다.</p>

      <ImageLightbox
        images={images}
        currentIndex={currentImgIndex}
        direction={direction}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        onPrev={prevImage}
        onNext={nextImage}
        onDotClick={handleDotClick}
        variants={variants}
        onDragEnd={onDragEnd}
        isTouchDevice={isTouchDevice}
      />
    </div>
  );
};

export default ImageSlider;
