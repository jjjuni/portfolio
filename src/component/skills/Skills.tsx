import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  BACKEND_SKILLS,
  FRONTEND_SKILLS,
  INFRA_SKILLS,
} from "../../constants/Skills";
import { useDeviceStore } from "../../stores/useDeviceStore";
import LogoItem from "./logoLoop/LogoItem";
import LogoLoop from "./logoLoop/LogoLoop";

export default function Skills() {
  return (
    <section
      id="Skills"
      className={`w-full h-full flex flex-col items-center justify-center p-10 pb-10 z-10 overflow-auto scrollbar-custom`}
    >
      <AnimatePresence>
        <motion.div
          className={`w-full h-full flex flex-col items-start`}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className={`font-bold text-32-40`}>SKILLS</p>
          <div
            className={`flex-1 flex flex-col justify-center gap-10 w-full overflow-hidden`}
          >
            <SkillList title="FRONTEND" skillList={FRONTEND_SKILLS} />
            <SkillList title="BACKEND" skillList={BACKEND_SKILLS} />
            <SkillList title="INFRA & TOOLS" skillList={INFRA_SKILLS} />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

type TooltipState = {
  visible: boolean;
  x: number;
  y: number;
  title: string;
  descList: string[];
};

const SkillList = ({
  title,
  skillList,
}: {
  title: string;
  skillList: SkillType[];
}) => {
  const { isMobile } = useDeviceStore();

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
        onLeave={() => setTooltip((prev) => ({ ...prev, visible: false }))}
      />
    ),
  }));

  const logoState = useMemo(() => {
    return {
      logoHeight: !isMobile ? 60 : 40,
      gap: !isMobile ? 32 : 24,
      speed: !isMobile ? 120 : 80,
    };
  }, [isMobile]);

  return (
    <div className={`flex flex-col gap-5`}>
      <div className={`flex flex-row gap-2.5 items-center`}>
        <p className={`text-[#9C9C9C] text-16-18 shrink-0`}>{title}</p>
        <span className={`h-[1px] w-full bg-[#9C9C9C] opacity-50`} />
      </div>
      <LogoLoop
        logoHeight={logoState.logoHeight}
        gap={logoState.gap}
        speed={logoState.speed}
        logos={skillLogos}
      />
      <AnimatePresence>
        {tooltip.visible && (
          <Tooltip
            x={tooltip.x}
            y={tooltip.y}
            title={tooltip.title}
            descList={tooltip.descList}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const Tooltip = ({ x, y, title, descList }: Omit<TooltipState, "visible">) => {
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
      }}
    >
      <div className="bg-white px-3.5 py-2.5 rounded-[8px] shadow-lg whitespace-nowrap flex flex-col gap-1.5">
        <p className="font-semibold text-14-16 text-text-primary">{title}</p>
        <div className={`flex flex-col gap-0.5`}>
          {descList.map((desc, i) => (
            <div key={i} className={`flex flex-row gap-2 items-center`}>
              <span className={`bg-text-muted rounded-full size-1`} />
              <p className="text-12-14 text-text-secondary">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
