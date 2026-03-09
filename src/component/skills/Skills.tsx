import { useState } from "react";
import useToggleStore from "../../stores/useToggleStore";
import LogoLoop from "./logoLoop/LogoLoop";
import LogoItem from "./logoLoop/LogoItem";
import { AnimatePresence, motion } from "framer-motion";
import { BACKEND_SKILLS, FRONTEND_SKILLS, INFRA_SKILLS } from "../../constants/Skills";
import { useScrollSection } from "../../hooks/useScrollSection";
import { skillsTimeline } from "../../utils/gsap/timeLine";
import { skillsTriggerConfig } from "../../utils/gsap/triggerConfig";

export default function Skills() {

  const {
    currentToggle,
    setCurrentToggle
  } = useToggleStore();

  useScrollSection({
    ...skillsTriggerConfig,
    onEnter: () => setCurrentToggle("SKILLS"),
    buildTimeline: skillsTimeline,
  })

  return (
    <section id="Skills" className={`w-full h-screen flex flex-col items-center justify-center pt-[80px] gap-10 z-10`}>
      {currentToggle === "SKILLS" && (  // 현재 토글이 SKILLS일 때만 렌더링 -> GSAP 애니메이션과 상태 관리를 최적화
        <>
          <p className={`font-bold text-[32px]`}>SKILLS</p>
          <div className={`flex flex-col gap-10 w-[80%] overflow-hidden`}>
            <SkillList title="FRONTEND" skillList={FRONTEND_SKILLS} />
            <SkillList title="BACKEND" skillList={BACKEND_SKILLS} />
            <SkillList title="INFRA & TOOLS" skillList={INFRA_SKILLS} />
          </div>
        </>
      )}

    </section>
  )
}

type TooltipState = {
  visible: boolean;
  x: number;
  y: number;
  title: string;
  descList: string[];
};

const SkillList = ({ title, skillList }: { title: string, skillList: SkillType[] }) => {

  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    title: "",
    descList: [],
  });

  const skillLogos = skillList.map((skill) => ({
    node: (
      <LogoItem
        key={skill.title}
        Logo={skill.Logo}
        title={skill.title}
        descList={skill.descList}
        onHover={(data) => setTooltip(data)}
        onLeave={() =>
          setTooltip((prev) => ({ ...prev, visible: false }))
        }
      />
    )
  }))

  return (
    <div className={`flex flex-col gap-5`}>
      <div className={`flex flex-row gap-2.5 items-center`}>
        <p className={`text-[#9C9C9C] text-[20px] shrink-0`}>{title}</p>
        <span className={`h-[1px] w-full bg-[#9C9C9C] opacity-50`} />
      </div>
      <LogoLoop logos={skillLogos} />
      <AnimatePresence>
        {tooltip.visible && (
          <Tooltip
            x={tooltip.x}
            y={tooltip.y}
            title={tooltip.title}
            descList={tooltip.descList} />
        )}
      </AnimatePresence>
    </div>
  )
}

const Tooltip = ({
  x,
  y,
  title,
  descList
}: Omit<TooltipState, "visible">) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-50 pointer-events-none "
      style={{
        top: y,
        left: x,
        transform: "translateX(-50%)",
      }}>
      <div className="bg-sidebar-bg px-3.5 py-2.5 rounded-[8px] shadow-lg whitespace-nowrap flex flex-col gap-1.5">
        <p className="font-semibold">{title}</p>
        <div className={`flex flex-col gap-0.5`}>
          {descList.map((desc, i) => (
            <div key={i} className={`flex flex-row gap-2 items-center`}>
              <span className={`bg-[#D4D4D4] rounded-full w-1 h-1`} />
              <p className="text-sm text-[#D4D4D4]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}