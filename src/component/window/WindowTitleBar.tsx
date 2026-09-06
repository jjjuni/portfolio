import type { DragControls } from "framer-motion";
import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

export default function WindowTitleBar({
  title,
  dragControls,
  setIsOpen,
}: {
  title: string | null;
  dragControls: DragControls;
  setIsOpen: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void);
}) {
  const TrafficLights = [
    {
      color: "red",
      className: "bg-[#FF5C60] hover:bg-[#FF3235] transition-all",
      onClick: () => setIsOpen(false),
    },
    {
      color: "yellow",
      className: "bg-[#FAC800]",
      onclick: () => {},
    },
    {
      color: "green",
      className: "bg-[#35C759]",
      onclick: () => {},
    },
  ];

  return (
    <motion.div
      className="
              flex h-9
              items-center gap-2
              border-b border-border rounded-t-xl
              px-3
              sticky
              top-0
              z-10
              cursor-grabbing
            "
      onPointerDown={(e) => dragControls.start(e)}
    >
      <div className="flex items-center">
        {TrafficLights.map((trafficLight) => (
          <div
            key={trafficLight.color}
            className="p-1"
            onClick={trafficLight.onClick}
          >
            <button
              className={`${trafficLight.className} h-3 w-3 rounded-full`}
            />
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-900">{title}</div>
    </motion.div>
  );
}
