import { useRef } from "react";
import useModalStore from "../../../stores/useModalStore";
import Part from "../part/Part";

type CircularItemProp = {
  item: ProjectType
}

export default function CircularItem({
  item
}: CircularItemProp) {

  const {
    setIsModalOpen,
    setCurrentProject,
  } = useModalStore();

  const startPos = useRef<{ x: number; y: number } | null>(null);
  const moved = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    startPos.current = { x: e.clientX, y: e.clientY };
    moved.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!startPos.current) return;

    const dx = Math.abs(e.clientX - startPos.current.x);
    const dy = Math.abs(e.clientY - startPos.current.y);

    if (dx > 0 || dy > 0) {
      moved.current = true;
    }
  };

  const handleClick = () => {
    if (moved.current) return; // 1px라도 움직이면 클릭 취소
    setIsModalOpen(true);
    setCurrentProject(item.title as string)
  };

  return (
    <div
      className="rounded-2xl shadow-xl cursor-pointer z-50 overflow-hidden flex flex-col bg-sidebar-bg hover:scale-105 transition-300"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onClick={handleClick}>
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
        draggable={false}
      />
      <div className={`p-4 flex flex-col gap-2`}>
        <div className={`flex flex-col gap-1`}>
          <p className={`text-[20px] font-bold`}>{item.title}</p>
          <p className={`text-[12px] font-light text-[#9C9C9C]`}>{item.desc}</p>
        </div>
        <div className={`flex flex-row gap-1`}>
          {item.parts?.map((part, index) => (
            <Part key={index} part={part} className={`text-[#D4D4D4] border-[#D4D4D4]`}/>
          ))}
        </div>
        <div>
          {item.skills?.map((SkillIcon, index) => (
            <SkillIcon key={index} className="w-5 h-5 inline-block mr-2" />
          ))}
        </div>
      </div>
    </div>
  )
}