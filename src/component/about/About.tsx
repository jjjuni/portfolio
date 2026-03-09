import { useMemo } from "react";
import useToggleStore from "../../stores/useToggleStore";
import { DayIcon, EmailIcon, PhoneIcon, PinIcon } from "../../assets/svgs";
import { EXPERIENCE_EX_LIST, EXPERIENCE_LIST } from "../../constants/About";
import { aboutTimeLine, profileTimeLine } from "../../utils/gsap/timeLine";
import { useScrollSectionList } from "../../hooks/useScrollSection";
import { aboutTriggerConfig, profileTriggerConfig } from "../../utils/gsap/triggerConfig";
import Award from "../common/Award";
import ListBullet from "../common/ListBullet";

export default function About() {

  const {
    setCurrentToggle
  } = useToggleStore();

  const scrollTimeline = useMemo(() => [
    {
      ...profileTriggerConfig,
      onEnter: () => setCurrentToggle("ABOUT"),
      buildTimeline: profileTimeLine,
    },
    {
      ...aboutTriggerConfig,
      onEnter: () => setCurrentToggle("ABOUT"),
      buildTimeline: aboutTimeLine,
    },
  ], [])

  useScrollSectionList(scrollTimeline)

  return (
    <section id="About" className={`w-full h-[125vh]`}>
      <div className={`w-full h-screen flex flex-col items-center pt-[140px] px-20`}>
        <div className={`flex flex-row w-full gap-20 h-full`}>
          <div className={`flex flex-col justify-between items-center w-full`}>
            <div className={`flex flex-col gap-8 w-full`}>
              <p className={`text-[60px] font-bold`}>이준희</p>
              <p className={`text-end text-[32px] text-[#D4D4D4]`}>"보이는 화면 이전에,<br />보이지 않는 경험을 설계합니다."</p>
              <p className={`text-[14px] text-[#D4D4D4] font-light`}>저에게 프론트엔드는 화면을 그리는 일이 아니라,<br />사용자의 경험과 맥락을 설계하는 일입니다.<br />보이지 않는 경험을 얼마나 정교하게 만들 수 있는지가<br />결과의 차이를 만든다고 생각합니다.</p>
            </div>
            <img className={`w-80 h-80 object-cover`} src="/mimo.png" />
          </div>

          <div className={`flex flex-col gap-20 shrink-0 h-full justify-end pb-20`}>
            <div id="Profile" className={`flex flex-col gap-[32px]`}>
              <p className={`text-[32px] font-semibold`}>Profile</p>
              <div className={`flex flex-row gap-8`}>
                <div className={`flex flex-col gap-8 text-white`}>
                  <ProfileItem Icon={DayIcon} text={"2001.02.10"} />
                  <ProfileItem Icon={PhoneIcon} text={"010-9278-3714"} />
                </div>
                <div className={`flex flex-col gap-8 text-white`}>
                  <ProfileItem Icon={EmailIcon} text={"0210leejun@gmail.com"} />
                  <ProfileItem Icon={PinIcon} text={"서울특별시 성북구"} />
                </div>
              </div>
            </div>

            <div id="Experience" className={`flex flex-col gap-10`}>
              <p className={`text-[32px] font-semibold`}>Experience</p>
              <ExperienceItemList />
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

const ProfileItem = ({ Icon, text }: { Icon: React.FunctionComponent, text: string }) => {

  return (
    <div className={`flex flex-row gap-2.5 items-center`}>
      <Icon />
      <p className={`text-[14px] text-[#D4D4D4]`}>{text}</p>
    </div>
  )
}

const ExperienceItemList = () => {
  return (
    <div className={`flex flex-col`}>
      {EXPERIENCE_LIST.map((experience, index) => (
        <div key={experience.desc}>
          <div className={`flex flex-row gap-4 items-center`}>
            <ListBullet className={`bg-[#D4D4D4]`} />
            <p className={`text-[14px] font-light text-[#D4D4D4] w-30`}>{experience.date}</p>
            <div className={`flex flex-row gap-4 items-center`}>
              {experience.icon}
              <p className={`text-[14px]`}>{experience.desc}</p>
            </div>
          </div>
          {index !== EXPERIENCE_LIST.length - 1 && <div className={`ml-[1.5px] w-[1px] h-10 border-l border-dashed border-[#808080]`} />}
        </div>
      ))}
      <div id="Experience_ex">
        <div className={`ml-[1.5px] w-[1px] h-15 border-l border-dashed border-[#808080]`} />
        {EXPERIENCE_EX_LIST.map((experience, index) => (
          <div key={experience.title}>
            <div className={`flex flex-row gap-4 items-center`}>
              <ListBullet className={`bg-[#D4D4D4]`}/>
              <p className={`text-[14px] font-light text-[#D4D4D4] w-30`}>{experience.date}</p>
              <Award
                Icon={experience.icon}
                iconClassName={"w-4 h-4"}
                title={experience.title}
                result={experience.result} />
            </div>
            {index !== EXPERIENCE_EX_LIST.length - 1 && <div className={`ml-[1.5px] w-[1px] h-6 border-l border-dashed border-[#808080]`} />}
          </div>
        ))}
      </div>
    </div>
  )
}