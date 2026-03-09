import { PROJECTS } from "../../constants/Projects";
import CircularItem from "./circularItems/CircularItem";
import CircularItems from "./circularItems/CircularItems";
import useToggleStore from "../../stores/useToggleStore";
import { projectsTriggerConfig } from "../../utils/gsap/triggerConfig";
import { projectsTimeline } from "../../utils/gsap/timeLine";
import { useScrollSection } from "../../hooks/useScrollSection";
import ProjectModal from "./projectModal/ProjectModal";

export default function Projects() {

  const {
    setCurrentToggle,
  } = useToggleStore();

  useScrollSection({
    ...projectsTriggerConfig,
    onEnter: () => setCurrentToggle("PROJECTS"),
    buildTimeline: projectsTimeline,
  })

  return (
    <section id="Projects" className={`w-full h-screen flex flex-col items-center`}>
      <CircularItems
        items={PROJECTS}
        renderItem={(item: ProjectType) => (CircularItem({ item }))}
      />
      <ProjectModal/>
    </section>
  )
}