import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import {
  COLBRUSH_DETAIL,
  EMOTREE_DETAIL,
  ONIER_DETAIL,
  PHARMQUEST_DETAIL,
  PORTFOLIO_DETAIL,
  SODOSIRO_DETAIL,
  TRAVLOOM_DETAIL,
} from "../../../constants/Projects";
import useWindowStore from "../../../stores/useWindowStore";
import Award from "../../common/Award";
import ListBullet from "../../common/ListBullet";
import WindowTitleBar from "../../window/WindowTitleBar";
import Part from "../part/Part";
import BgLabel from "./BgLabel";
import Divider from "./Divider";
import ImageSlider from "./ImageSlider";
import ProjectSection from "./ProjectSection";

const ProjectWindow = () => {
  const {
    isProjectWindowOpen,
    setIsProjectWindowOpen,
    currentProject,
    activeWindow,
    setActiveWindow,
  } = useWindowStore();

  const dragControls = useDragControls();

  const [projectDetail, setProjectDetail] = useState<ProjectDetail | null>(
    null,
  );

  useEffect(() => {
    switch (currentProject) {
      case "어디약":
        setProjectDetail(PHARMQUEST_DETAIL);
        break;

      case "떠나,봄":
        setProjectDetail(TRAVLOOM_DETAIL);
        break;

      case "Colbrush":
        setProjectDetail(COLBRUSH_DETAIL);
        break;

      case "EMOTree":
        setProjectDetail(EMOTREE_DETAIL);
        break;

      case "ONIER":
        setProjectDetail(ONIER_DETAIL);
        break;

      case "Portfolio":
        setProjectDetail(PORTFOLIO_DETAIL);
        break;

      case "소도시로":
        setProjectDetail(SODOSIRO_DETAIL);
        break;

      default:
        setProjectDetail(null);
        break;
    }
  }, [currentProject]);

  return (
    <AnimatePresence>
      {projectDetail && isProjectWindowOpen && (
        <motion.div
          id="Project-modal"
          drag
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          onPointerDown={() => {
            setActiveWindow("projectWindow");
          }}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className={`
            absolute
            left-1/2
            top-1/2

            flex
            h-7/10
            w-7/10

            -translate-x-1/2
            -translate-y-1/2

            flex-col

            overflow-hidden

            rounded-xl

            border
            border-white/20

            bg-white/[0.60]

            backdrop-blur-xl

            before:pointer-events-none
            before:absolute
            before:inset-[1px]
            before:rounded-xl
            before:border
            before:border-white/10
            before:content-['']

            after:pointer-events-none
            after:absolute
            after:left-[10%]
            after:right-[10%]
            after:top-0
            after:h-px
            after:bg-white/40
            after:blur-[1px]
            after:content-['']

            shadow-[0_20px_60px_rgba(0,0,0,0.3)]

            ${activeWindow === "window" ? `z-100` : `z-101`}
          `}
        >
          {/* Header */}
          <WindowTitleBar
            title={currentProject}
            dragControls={dragControls}
            setIsOpen={setIsProjectWindowOpen}
          />

          {/* Browser Content */}
          <div
            className="
              h-full
              w-full

              overflow-auto

              scrollbar-custom

              rounded-b-xl
            "
          >
            {/* Project Header */}
            <div className="flex w-full flex-col">
              <div className="relative flex w-full flex-col justify-end">
                <div className="relative w-full">
                  <img
                    src={projectDetail.background}
                    className="block w-full"
                    draggable={false}
                    alt=""
                  />

                  <div
                    className="
                      absolute
                      bottom-0
                      h-2/3
                      w-full

                      bg-gradient-to-t
                      from-[#232323]
                      to-[#23232300]

                      pointer-events-none
                    "
                  />
                </div>

                {/* Project Info */}

                <div
                  className="
                    absolute
                    bottom-0
                    z-10

                    flex
                    w-full
                    flex-row
                    justify-between

                    px-12
                    py-8

                    max-md:px-8
                    max-md:py-6

                    max-sm:px-6
                    max-sm:py-4
                  "
                >
                  {/* Left */}

                  <div
                    className="
                      flex
                      flex-col

                      gap-4

                      max-md:gap-2
                    "
                  >
                    <div className="flex flex-col">
                      {projectDetail.logo}

                      <p
                        className="
                          truncate
                          px-1

                          text-12-14-16
                          font-light
                          text-border
                        "
                      >
                        {projectDetail.desc}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-row gap-3">
                      {projectDetail.skills.map((Skill, i) => (
                        <Skill key={i} className="size-7 max-md:size-5" />
                      ))}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col justify-between">
                    {/* Links */}
                    <div
                      className="
                        flex
                        flex-row
                        justify-end
                        gap-3
                      "
                    >
                      {projectDetail.links.map((link, i) => {
                        const Icon = link.icon;

                        return (
                          <Icon
                            color={"#ffffff"}
                            key={i}
                            className="
                              size-8
                              cursor-pointer

                              transition-opacity
                              hover:opacity-70

                              max-md:size-6
                            "
                            onClick={() => window.open(link.link)}
                          />
                        );
                      })}
                    </div>

                    {/* Project Info */}
                    <div
                      className="
                        flex
                        flex-col
                        items-end

                        gap-2.5

                        text-end
                        text-[14px]
                        leading-none
                        text-border

                        max-md:gap-1
                        
                        max-md:text-[12px]
                        max-sm:text-[10px]
                      "
                    >
                      <p>{projectDetail.period}</p>

                      <p>{projectDetail.team}</p>

                      <div className="mt-1 flex flex-row gap-1">
                        {projectDetail.parts.map((part, i) => (
                          <Part
                            key={i}
                            part={part}
                            className="text-[12px] font-semibold"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex w-full flex-col gap-8 px-7 pb-12 max-md:px-4">
                {/* Overview */}
                <ProjectSection label="프로젝트 개요" className={`pt-8`}>
                  <div className="flex flex-col gap-2.5">
                    {projectDetail.overview.map((desc, i) => (
                      <div
                        key={i}
                        className="
                            text-12-14-16
                            text-text-muted
                          "
                      >
                        {desc}
                      </div>
                    ))}
                  </div>
                </ProjectSection>

                {/* Award */}

                {projectDetail.award && (
                  <>
                    <Divider />

                    <ProjectSection label="Award">
                      {projectDetail.award.map((award, i) => {
                        const Icon = award.icon;

                        return (
                          <Award
                            key={i}
                            Icon={Icon}
                            iconClassName="size-5"
                            title={award.title}
                            result={award.result}
                          />
                        );
                      })}
                    </ProjectSection>
                  </>
                )}

                {/* Features */}

                <Divider />

                <ProjectSection label="주요 기능">
                  <div
                    className="
                      flex
                      flex-col
                      gap-5

                      text-12-14-16
                      text-text-muted
                    "
                  >
                    {projectDetail.feature.desc}

                    <div className="flex flex-col gap-4 px-2">
                      {projectDetail.feature.details.map((detail, i) => {
                        if (detail.type === "descs") {
                          return (
                            <ListSection
                              key={i}
                              label={detail.label}
                              items={detail.descs}
                            />
                          );
                        }

                        if (detail.type === "img") {
                          return (
                            <ImageSection
                              key={i}
                              label={detail.label}
                              img={detail.img}
                            />
                          );
                        }

                        return null;
                      })}
                    </div>
                  </div>
                </ProjectSection>

                {/* Contribution */}

                <Divider />

                <ProjectSection label="기여도">
                  <div className="flex flex-col gap-4">
                    {projectDetail.contribution.map((item, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <BgLabel text={item.label} />

                        <div className="flex flex-col gap-1 text-text-secondary">
                          {item.desc.map((desc, j) => (
                            <ListItem key={j}>
                              <ListBullet />
                              {desc}
                            </ListItem>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ProjectSection>

                {/* Trouble Shooting */}

                <Divider />

                <ProjectSection label="Trouble Shooting">
                  <div className="flex flex-col gap-4">
                    {projectDetail.troubleShooting.map((item, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <BgLabel text={item.label} />

                        {item.desc.map((desc, j) => (
                          <TroubleItem
                            key={j}
                            trouble={desc.trouble}
                            solution={desc.solution}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </ProjectSection>

                {/* Images */}

                {projectDetail.images && projectDetail.images.length > 0 && (
                  <>
                    <Divider />

                    <ProjectSection
                      label={projectDetail.imageLabel || "주요 서비스 UI"}
                    >
                      <ImageSlider images={projectDetail.images} />
                    </ProjectSection>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectWindow;

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <p className="text-16-18-20 font-bold text-text-primary">{children}</p>
);

const ListSection = ({ label, items }: { label: string; items: string[] }) => (
  <div className="flex flex-col gap-2">
    <SectionTitle>{label}</SectionTitle>

    <div className="flex flex-col gap-1 text-text-secondary">
      {items.map((item, i) => (
        <ListItem key={i}>
          <ListBullet color="bg-text-muted" />
          {item}
        </ListItem>
      ))}
    </div>
  </div>
);

const ImageSection = ({ label, img }: { label: string; img: string }) => (
  <div className="flex flex-col gap-2">
    <SectionTitle>{label}</SectionTitle>

    <img src={img} draggable={false} alt={label} />
  </div>
);

const TroubleItem = ({
  trouble,
  solution,
}: {
  trouble: string;
  solution: string;
}) => (
  <div className="flex flex-col gap-2 px-1.5">
    <TroubleBlock title="문제점" text={trouble} />

    <TroubleBlock title="해결" text={solution} />
  </div>
);

const TroubleBlock = ({ title, text }: { title: string; text: string }) => (
  <div className="flex flex-col gap-1">
    <p className="text-[16px] font-bold max-md:text-[14px]">{title}</p>

    <p className="text-[14px] max-md:text-[12px] text-text-secondary">{text}</p>
  </div>
);

const ListItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`
      ${className ?? ""}

      flex
      flex-row
      items-start
      gap-2
      px-1

      text-12-14-16
    `}
  >
    {children}
  </div>
);
