import { type MouseEvent } from "react";

type Props = {
  items: string[];
  currentIndex: number;
  onClick: (index: number, e: MouseEvent) => void;
  className?: string;
};

const SliderDots = ({ items, currentIndex, onClick, className = "" }: Props) => {
  return (
    <div className={`flex flex-row gap-2 ${className}`}>
      {items.map((_, i) => (
        <div
          key={i}
          className={`size-2 rounded-full transition-all duration-300 cursor-pointer ${
            i === currentIndex ? "bg-white w-4" : "bg-white/30"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onClick(i, e);
          }}
        />
      ))}
    </div>
  );
};

export default SliderDots;
