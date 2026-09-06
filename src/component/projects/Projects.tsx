import { PROJECTS } from "../../constants/Projects";
import useWindowStore from "../../stores/useWindowStore";

export default function Projects() {
  const { setIsProjectWindowOpen, setCurrentProject, setActiveWindow } =
    useWindowStore();

  return (
    <section id="Projects" className="flex h-full w-full overflow-hidden">
      {/* Sidebar */}
      <aside className="w-36 lg:w-52 shrink-0 border-r border-border p-4">
        <p className="mb-3 px-2 text-12-14 font-semibold text-text-muted">
          PROJECTS
        </p>

        <nav className="flex flex-col gap-1">
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <button
                key={project.id}
                className="
                  flex items-center gap-2
                  rounded-md
                  px-3 py-2
                  text-left text-sm
                hover:bg-black/5
                  transition-all duration-100
                "
                onDoubleClick={() => {
                  setActiveWindow("projectWindow");
                  setCurrentProject(project.title);
                  setIsProjectWindowOpen(true);
                }}
              >
                <Icon />
                <div className={`text-12-14 text-text-primary`}>
                  {project.title}
                </div>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 overflow-auto scrollbar-custom">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {PROJECTS.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              icon={project.icon}
            />
          ))}
        </div>
      </main>
    </section>
  );
}

function ProjectItem({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
}) {
  const { setIsProjectWindowOpen: setIsModalOpen, setCurrentProject } =
    useWindowStore();

  const { setActiveWindow } = useWindowStore();

  return (
    <button
      className="flex flex-col items-center gap-2 rounded-lg p-4 hover:bg-black/5 transition-all duration-100"
      onDoubleClick={() => {
        setActiveWindow("projectWindow");
        setCurrentProject(title);
        setIsModalOpen(true);
      }}
    >
      <Icon className={`size-10 lg:size-15`} />
      <span className="text-sm">{title}</span>
    </button>
  );
}
