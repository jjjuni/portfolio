import { AnimatePresence, motion } from "framer-motion";
import useModalStore from "../../../stores/useModalStore"
import { useEffect, useRef, useState, type ReactNode } from "react";
import useLenisScroll from "../../../hooks/useLenisScroll";
import Portal from "../../portal/Portal";
import { COLBRUSH_DETAIL, EMOTREE_DETAIL, PHARMQUEST_DETAIL, TRAVLOOM_DETAIL } from "../../../constants/Projects";
import Part from "../part/Part";
import Divider from "./Divider";
import ModalSection from "./ModalSection";
import Award from "../../common/Award";
import BgLabel from "./BgLabel";
import ListBullet from "../../common/ListBullet";

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
  }, [currentProject])

  return (
    <motion.div
      id="Project-modal"
      ref={ref}
      className={`fixed top-0 w-screen h-screen z-[9999] bg-[#00000080] flex flex-col items-center pt-40 overflow-scroll scrollbar-none overscroll-contain select-none`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={() => setIsModalOpen(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}>
      <motion.div
        className={`max-md:w-full min-xl:w-3/5 w-4/5 min-h-screen bg-sidebar-bg rounded-t-[20px] shrink-0 flex flex-col gap-4 overflow-hidden`}
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        exit={{ y: 200 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}>
        {projectDetail &&
          <div className={`w-full flex flex-col`}>
            {/* 타이틀 */}
            <div className={`w-full flex flex-col justify-end relative`}>
              <div className={`w-full relative`}>
                <img
                  src={projectDetail.background}
                  className={`w-full`}
                  draggable={false} />
                <div className={`w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-[#232323] to-[#23232300]`} />
              </div>

              <div className={`w-full absolute flex flex-row justify-between bottom-0 z-10 py-8 px-12`}>
                <div className={`flex flex-col gap-4`}>
                  <div className={`flex flex-col`}>
                    {projectDetail.logo}
                    <p className={`font-light text-[16px] text-[#9C9C9C] px-1`}>{projectDetail.desc}</p>
                  </div>
                  <div className={`flex flex-row gap-3`}>
                    {projectDetail.skills.map((Skill, index) => (
                      <Skill key={index} className={`w-7 h-7`} />
                    ))}
                  </div>
                </div>

                <div className={`flex flex-col justify-between`}>
                  <div className={`flex flex-row justify-end gap-3`}>
                    {projectDetail.links.map((link, index) => {
                      const Icon = link.icon;
                      return (<Icon key={index} className={`w-8 h-8 cursor-pointer`} onClick={() => window.open(link.link)} />)
                    })}
                  </div>
                  <div className={`text-[14px] text-[#9C9C9C] flex flex-col gap-2.5 items-end leading-none`}>
                    <p>{projectDetail.period}</p>
                    <p>{projectDetail.team}</p>
                    <div className={`flex flex-row gap-1`}>
                      {projectDetail.parts.map((part, index) => (
                        <Part key={index} part={part} className={`text-[12px] font-semibold`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 컨텐츠 */}
            <div className={`w-full flex flex-col gap-8 px-7 pb-12`}>

              <Divider />

              <ModalSection label={"프로젝트 개요"}>
                <div className={`flex flex-col gap-2.5`}>
                  {projectDetail.overview.map((desc, index) => (
                    <div key={index} className={`text-[16px] text-[#9C9C9C]`}>{desc}</div>
                  ))}
                </div>
              </ModalSection>

              <Divider />
              {projectDetail.award &&
                <>
                  <ModalSection label={"Award"}>
                    {projectDetail.award.map((award, index) => {
                      const Icon = award.icon
                      return (
                        <Award
                          key={index}
                          Icon={Icon}
                          iconClassName={`w-5 h-5`}
                          title={award.title}
                          result={award.result} />
                      )
                    })}
                  </ModalSection>
                  <Divider />
                </>
              }


              <ModalSection label={"주요 기능"}>
                <div className={`text-[16px] text-[#9C9C9C] flex flex-col gap-5`}>
                  {projectDetail.feature.desc}
                  <div className={`flex flex-col gap-4 px-2`}>
                    {projectDetail.feature.details.map((detail, index) => {
                      if (detail.type === 'descs') {
                        return (
                          <div key={index} className={`flex flex-col gap-2`}>
                            <p className={`text-[20px] font-bold text-white`}>{detail.label}</p>
                            <div className={`flex flex-col gap-1`}>
                              {detail.descs.map((desc, index) => (
                                <ListItem key={index}>
                                  <ListBullet color={`bg-[#9C9C9C]`} />
                                  {desc}
                                </ListItem>
                              ))}
                            </div>
                          </div>
                        )
                      } else if (detail.type === 'img') {
                        return (
                          <div key={index} className={`flex flex-col gap-2`}>
                            <p className={`text-[20px] font-bold text-white`}>{detail.label}</p>
                            <img src={detail.img} />
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              </ModalSection>

              <Divider />

              <ModalSection label={"기여도"}>
                <div className={`flex flex-col gap-4`}>
                  {projectDetail.contribution.map((item, index) => (
                    <div key={index} className={`flex flex-col gap-2`}>
                      <BgLabel text={item.label} />
                      <div className={`flex flex-col gap-1`}>
                        {item.desc.map((item, index) => (
                          <ListItem key={index}>
                            <ListBullet />
                            {item}
                          </ListItem>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ModalSection>

              <Divider />

              <ModalSection label={"Trouble Shooting"}>
                <div className={`flex flex-col gap-4`}>
                  {projectDetail.troubleShooting.map((item, index) => (
                    <div key={index} className={`flex flex-col gap-2`}>
                      <BgLabel text={item.label} />
                      {item.desc.map((item, index) => (
                        <div key={index} className={`flex flex-col gap-2 px-1.5`}>
                          <div className={`flex flex-col gap-1`}>
                            <p className={`text-[16px] font-bold`}>문제점</p>
                            <p className={`text-[14px]`}>{item.trouble}</p>
                          </div>
                          <div className={`flex flex-col gap-1`}>
                            <p className={`text-[16px] font-bold`}>해결</p>
                            <p className={`text-[14px]`}>{item.solution}</p>
                          </div>
                        </div>
                      ))}

                    </div>
                  ))}
                </div>
              </ModalSection>
            </div>
          </div>
        }
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal;

const ListItem = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={`${className} flex flex-row items-start gap-2 px-1`}>{children}</div>
  )
}