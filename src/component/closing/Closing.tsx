import { useMemo } from "react";
import { closeHeaderConfig, closingTriggerConfig } from "../../utils/gsap/triggerConfig";
import { closeHeaderTimeline, closingTimeline } from "../../utils/gsap/timeLine";
import { useScrollSectionList } from "../../hooks/useScrollSection";
import { useSizeStore } from "../../stores/useSizeStore";

export default function Closing() {

  const { isMobile } = useSizeStore();

  const scrollTimeline = useMemo(() => [
    {
      ...closingTriggerConfig,
      buildTimeline: closingTimeline,
    },
    {
      ...closeHeaderConfig,
      buildTimeline: closeHeaderTimeline,
    }
  ], [])



  useScrollSectionList(scrollTimeline)

  return (
    <section id="Closing" className={`w-full h-[100dvh] bg-sidebar-bg flex flex-col items-center relative`}>
      <div id="ClosingBg" className={`absolute w-full h-full bg-cover bg-[url('/background.png')] top-0`} />
      <div id="Closing-comment" className={`w-full h-full flex flex-col items-center justify-center pb-10`}>
        <p className={`text-black opacity-60 font-extrabold max-sm:text-[60px] max-md:text-[100px] text-[120px] leading-none`}>Thank You</p>
        <div className={`text-black z-1 text-center text-12-14-16`}>
          <p>단순히 화면을 구현하는 것보다,{ isMobile && <br/>}보이지 않는 경험까지 고민하는 프론트엔드 개발자이고 싶습니다.</p>
          <p>보다 더 나은 <span className={`font-bold`}>프론트엔드 개발자</span>로 성장해 가겠습니다.</p>
        </div>
      </div>
      <p className={`max-sm:text-[10px] text-[12px] text-black opacity-80 bottom-8 absolute`}>© 2026 Junhee Lee. All rights reserved.</p>
    </section>
  )
}