import { AnimatePresence, motion } from "framer-motion";
import useModalStore from "../../../stores/useModalStore"
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import useLenisScroll from "../../../hooks/useLenisScroll";
import Portal from "../../portal/Portal";
import { COLBRUSH_DETAIL, EMOTREE_DETAIL, PHARMQUEST_DETAIL, TRAVLOOM_DETAIL } from "../../../constants/Projects";
import Part from "../part/Part";
import Divider from "./Divider";
import ModalSection from "./ModalSection";
import Award from "../../common/Award";
import BgLabel from "./BgLabel";
import ListBullet from "../../common/ListBullet";
import SliderNavButtons from "./SliderNavButtons";
import SliderDots from "./SliderDots";
import ImageLightbox from "./ImageLightbox";

const ProjectModal = () => {

  const {
    isModalOpen
  } = useModalStore();

  return (
    <Portal>
      <AnimatePresence>
        {isModalOpen &&
          <ProjectModalContent />
        }
      </AnimatePresence>
    </Portal>
  )
}

const ProjectModalContent = () => {

  const {
    setIsModalOpen,
    currentProject,
  } = useModalStore();

  const [projectDetail, setProjectDetail] = useState<ProjectDetail | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef(0);

  useLenisScroll(ref)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - touchStartY.current;

    if (ref.current?.scrollTop === 0 && deltaY > 0) {
      setIsModalOpen(false);
    }
  };

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (!projectDetail?.images) return;
    setDirection(1);
    setCurrentImgIndex((prev) => (prev + 1) % projectDetail.images!.length);
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (!projectDetail?.images) return;
    setDirection(-1);
    setCurrentImgIndex((prev) => (prev - 1 + projectDetail.images!.length) % projectDetail.images!.length);
  };

  const handleDotClick = (index: number, e: MouseEvent) => {
    e.stopPropagation();
    setDirection(index > currentImgIndex ? 1 : -1);
    setCurrentImgIndex(index);
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

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

      default:
        break;
    }
    setCurrentImgIndex(0);
    setDirection(0);
  }, [currentProject])

  return (
    <motion.div
      id="Project-modal"
      ref={ref}
      className="fixed top-0 w-screen h-[100dvh] z-[9999] bg-[#00000080] flex flex-col items-center pt-40 overflow-scroll scrollbar-none overscroll-contain select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={() => setIsModalOpen(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <motion.div
        className="max-md:w-full min-xl:w-3/5 w-4/5 min-h-[100dvh] bg-sidebar-bg rounded-t-[20px] shrink-0 flex flex-col gap-4 overflow-hidden"
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        exit={{ y: 200 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {projectDetail &&
          <div className="w-full flex flex-col">
            {/* 타이틀 */}
            <div className="w-full flex flex-col justify-end relative">
              <div className="w-full relative">
                <img
                  src={projectDetail.background}
                  className="w-full"
                  draggable={false}
                />
                <div className="w-full h-2/3 absolute bottom-0 bg-gradient-to-t from-[#232323] to-[#23232300]" />
              </div>

              <div className="w-full absolute flex flex-row justify-between bottom-0 z-10 max-sm:py-4 max-sm:px-6 max-md:py-6 max-md:px-8 py-8 px-12">
                <div className="flex flex-col max-md:gap-2 gap-4">
                  <div className="flex flex-col">
                    {projectDetail.logo}
                    <p className="font-light text-12-14-16 text-[#9C9C9C] px-1 truncate">
                      {projectDetail.desc}
                    </p>
                  </div>

                  <div className="flex flex-row gap-3">
                    {projectDetail.skills.map((Skill, i) => (
                      <Skill key={i} className="max-md:size-5 size-7" />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="flex flex-row justify-end gap-3">
                    {projectDetail.links.map((link, i) => {
                      const Icon = link.icon;
                      return (
                        <Icon
                          key={i}
                          className="max-md:size-6 size-8 cursor-pointer"
                          onClick={() => window.open(link.link)}
                        />
                      );
                    })}
                  </div>

                  <div className="max-sm:text-[10px] max-md:text-[12px] text-[14px] text-[#9C9C9C] flex flex-col max-md:gap-1 gap-2.5 text-end items-end leading-none">
                    <p>{projectDetail.period}</p>
                    <p>{projectDetail.team}</p>

                    <div className="flex flex-row gap-1 mt-1">
                      {projectDetail.parts.map((part, i) => (
                        <Part key={i} part={part} className="text-[12px] font-semibold" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* content */}
            <div className="w-full flex flex-col gap-8 max-md:px-4 px-7 pb-12">
              <Divider />

              {/* overview */}
              <ModalSection label="프로젝트 개요">
                <div className="flex flex-col gap-2.5">
                  {projectDetail.overview.map((desc, i) => (
                    <div key={i} className="text-12-14-16 text-[#9C9C9C]">
                      {desc}
                    </div>
                  ))}
                </div>
              </ModalSection>

              <Divider />

              {/* award */}
              {projectDetail.award && (
                <>
                  <ModalSection label="Award">
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
                  </ModalSection>

                  <Divider />
                </>
              )}

              {/* features */}
              <ModalSection label="주요 기능">
                <div className="text-12-14-16 text-[#9C9C9C] flex flex-col gap-5">
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
              </ModalSection>

              <Divider />

              {/* contribution */}
              <ModalSection label="기여도">
                <div className="flex flex-col gap-4">
                  {projectDetail.contribution.map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <BgLabel text={item.label} />

                      <div className="flex flex-col gap-1">
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
              </ModalSection>

              <Divider />

              {/* trouble */}
              <ModalSection label="Trouble Shooting">
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
              </ModalSection>

              {/* 이미지 슬라이더 */}
              {projectDetail.images && projectDetail.images.length > 0 && (
                <>
                  <Divider />
                  <ModalSection label={projectDetail.imageLabel || "주요 서비스 UI"}>
                    <div className="w-full flex flex-col items-center gap-4 pt-2">
                      <div className="relative w-full aspect-[45/32] flex items-center justify-center group overflow-hidden">
                        <AnimatePresence mode="popLayout" custom={direction}>
                          <motion.div
                            key={currentImgIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="w-full overflow-hidden cursor-pointer rounded-xl"
                            transition={{
                              x: { type: "spring", stiffness: 300, damping: 30 },
                              opacity: { duration: 0.3 }
                            }}
                            onClick={() => setSelectedImage(projectDetail.images![currentImgIndex])}
                          >
                            <img
                              src={projectDetail.images[currentImgIndex]}
                              alt={`project-${currentImgIndex}`}
                              className="w-full h-auto block"
                            />
                          </motion.div>
                        </AnimatePresence>

                        {projectDetail.images.length > 1 && (
                          <SliderNavButtons onPrev={prevImage} onNext={nextImage} />
                        )}
                      </div>

                      <SliderDots
                        items={projectDetail.images}
                        currentIndex={currentImgIndex}
                        onClick={handleDotClick}
                      />
                      <p className="text-[12px] text-[#9C9C9C]">이미지를 클릭하면 크게 볼 수 있습니다.</p>
                    </div>
                  </ModalSection>
                </>
              )}
            </div>
          </div>
        }
      </motion.div>

      <ImageLightbox
        images={projectDetail?.images || []}
        currentIndex={currentImgIndex}
        direction={direction}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        onPrev={prevImage}
        onNext={nextImage}
        onDotClick={handleDotClick}
        variants={variants}
      />
    </motion.div>
  );
};

export default ProjectModal;

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <p className="text-16-18-20 font-bold text-white">{children}</p>
);

const ListSection = ({
  label,
  items,
}: {
  label: string;
  items: string[];
}) => (
  <div className="flex flex-col gap-2">
    <SectionTitle>{label}</SectionTitle>

    <div className="flex flex-col gap-1">
      {items.map((item, i) => (
        <ListItem key={i}>
          <ListBullet color="bg-[#9C9C9C]" />
          {item}
        </ListItem>
      ))}
    </div>
  </div>
);

const ImageSection = ({
  label,
  img,
}: {
  label: string;
  img: string;
}) => (
  <div className="flex flex-col gap-2">
    <SectionTitle>{label}</SectionTitle>
    <img src={img} />
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

const TroubleBlock = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => (
  <div className="flex flex-col gap-1">
    <p className="max-md:text-[14px] text-[16px] font-bold">{title}</p>
    <p className="max-md:text-[12px] text-[14px]">{text}</p>
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
    className={`${className} text-12-14-16 flex flex-row items-start gap-2 px-1`}
  >
    {children}
  </div>
);
