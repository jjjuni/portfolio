import { type MouseEvent } from "react";
import { useDeviceStore } from "../../../stores/useDeviceStore";

type Props = {
  onPrev: (e: MouseEvent) => void;
  onNext: (e: MouseEvent) => void;
  variant?: "slider" | "lightbox";
};

const SliderNavButtons = ({ onPrev, onNext, variant = "slider" }: Props) => {

  const {
    isTouchDevice,
  } = useDeviceStore();

  const isLightbox = variant === "lightbox";
  const buttonClass = `absolute z-10 h-full flex items-center ${isLightbox ? `from-black/60` : `from-[#232323ee]`}  to-transparent opacity-0 hover:opacity-100 transition-300 text-white cursor-pointer select-none`

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    onPrev(e);
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    onNext(e);
  };

  return (
    !isTouchDevice &&
    <>
      <button
        className={`left-0 bg-gradient-to-r justify-start ${isLightbox ? "pl-8" : "pl-4"
          } ${buttonClass}`}
        onClick={handlePrev}
      >
        <svg
          className={`${isLightbox ? "max-md:size-8 size-12" : "max-md:size-6 size-8"} drop-shadow-lg`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={isLightbox ? 2 : 2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className={`right-0 bg-gradient-to-l justify-end ${isLightbox ? "pr-8" : "pr-4"
          } ${buttonClass}`}
        onClick={handleNext}
      >
        <svg
          className={`${isLightbox ? "max-md:size-8 size-12" : "max-md:size-6 size-8"} drop-shadow-lg`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={isLightbox ? 2 : 2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </>
  );
};

export default SliderNavButtons;
