import { PROJECTS } from "../../constants/Projects";
import CircularItem from "./circularItems/CircularItem";
import CircularItems from "./circularItems/CircularItems";
import useToggleStore from "../../stores/useToggleStore";
import { projectsTriggerConfig } from "../../utils/gsap/triggerConfig";
import { projectsTimeline } from "../../utils/gsap/timeLine";
import { useScrollSection } from "../../hooks/useScrollSection";
import ProjectModal from "./projectModal/ProjectModal";
import { useEffect, useState } from "react";

export default function Projects() {

  const {
    setCurrentToggle,
  } = useToggleStore();

  const [cardStyle, setCardStyle] = useState({
    width: 240,
    height: 160,
    gap: 60,
  });

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setCardStyle(e.matches ? {
        width: 360,
        height: 240,
        gap: 60,
      } : {
        width: 240,
        height: 160,
        gap: 40,
      });
    };

    handleChange(media);

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useScrollSection({
    ...projectsTriggerConfig,
    onEnter: () => setCurrentToggle("PROJECTS"),
    buildTimeline: projectsTimeline,
  })

  return (
    <section id="Projects" className={`w-full h-[100dvh] flex flex-col items-center`}>
      <CircularItems
        cardWidth={cardStyle.width}
        cardHeight={cardStyle.height}
        gap={cardStyle.gap}
        items={PROJECTS}
        renderItem={(item: ProjectType) => (CircularItem({ item }))}
      />
      <ProjectModal />
    </section>
  )
}