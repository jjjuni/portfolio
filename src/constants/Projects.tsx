import {
  ChromaIcon,
  ColbrushIcon,
  EmotreeIcon,
  ExpoIcon,
  ExtensionIcon,
  FastapiIcon,
  FigmaIcon,
  FirebaseIcon,
  GithubIcon,
  KIISIcon,
  MysqlIcon,
  NextjsIcon,
  NpmIcon,
  OnestoreIcon,
  OnierIcon,
  OpenAIIcon,
  OpensourceIcon,
  PharmquestIcon,
  PortfolioIcon,
  ReactIcon,
  SKUnivIcon,
  SodosiroIcon,
  SpringIcon,
  TailwindIcon,
  TravloomIcon,
  YoutubeIcon,
} from "../assets/svgs";
import BoldSpan from "../component/common/BoldSpan";
import ProjectLogo from "../component/common/ProjectLogo";

export const PROJECTS = [
  {
    id: 1,
    title: "소도시로",
    desc: "강원도 소도시 기반 AI 일정 추천 서비스",
    icon: SodosiroIcon,
    image: "/projects/sodosiro/Sodosiro.png",
    parts: ["FE"],
    skills: [ReactIcon, ExpoIcon, TailwindIcon],
  },
  {
    id: 2,
    title: "Colbrush",
    desc: "색각이상자를 위한 UI 테마 자동화 라이브러리",
    icon: ColbrushIcon,
    image: "/projects/colbrush/Colbrush.png",
    parts: ["Library Development"],
    skills: [ReactIcon, TailwindIcon, NpmIcon],
  },
  {
    id: 3,
    title: "떠나,봄",
    desc: "나만의 AI 스마트 여행플래너",
    icon: TravloomIcon,
    image: "/projects/travloom/Travloom.png",
    parts: ["PM", "Design", "FE", "BE"],
    skills: [
      FigmaIcon,
      ReactIcon,
      NextjsIcon,
      TailwindIcon,
      SpringIcon,
      FirebaseIcon,
      MysqlIcon,
    ],
  },
  {
    id: 4,
    title: "EMOTree",
    desc: "알렉시티미아를 위한 감정 훈련 플랫폼",
    icon: EmotreeIcon,
    image: "/projects/emotree/EMOTree.png",
    parts: ["PM", "Design", "FE", "BE"],
    skills: [
      FigmaIcon,
      ReactIcon,
      TailwindIcon,
      MysqlIcon,
      FastapiIcon,
      ChromaIcon,
      OpenAIIcon,
    ],
  },
  {
    id: 5,
    title: "ONIER",
    desc: "시각장애인 검색 효율을 높히는 AI 확장프로그램",
    icon: OnierIcon,
    image: "/projects/onier/ONIER.png",
    parts: ["PM", "FE"],
    skills: [ReactIcon, TailwindIcon, ExtensionIcon],
  },
  {
    id: 6,
    title: "어디약",
    desc: "해외 상비약 정보 및 약국 위치 제공 서비스",
    icon: PharmquestIcon,
    image: "/projects/pharmquest/Pharmquest.png",
    parts: ["FE"],
    skills: [ReactIcon, NextjsIcon, TailwindIcon],
  },
  {
    id: 7,
    title: "Portfolio",
    desc: "포트폴리오 사이트",
    icon: PortfolioIcon,
    image: "/projects/portfolio/Portfolio.png",
    parts: ["Design", "FE"],
    skills: [FigmaIcon, ReactIcon, TailwindIcon],
  },
];

export const COLBRUSH_DETAIL: ProjectDetail = {
  title: "Colbrush",
  background: "/projects/colbrush/Colbrush.png",
  logo: (
    <ProjectLogo
      title={"colbrush"}
      className={`font-racing bg-gradient-to-r from-[#ffffff] to-[#666666] bg-clip-text text-transparent px-1`}
    />
  ),
  desc: "색각이상자를 위한 UI 테마 자동화 라이브러리",
  skills: [ReactIcon, TailwindIcon, NpmIcon],
  links: [
    {
      icon: ColbrushIcon,
      link: "https://colbrush.site/",
    },
    {
      icon: GithubIcon,
      link: "https://github.com/2025-OSDC/colbrush",
    },
    {
      icon: NpmIcon,
      link: "https://www.npmjs.com/package/colbrush",
    },
    {
      icon: YoutubeIcon,
      link: "https://youtu.be/Li9QUlkowu8",
    },
  ],
  period: "2025.07 ~ 2025.10",
  team: "PM 1명, Desing 1명, Library Developer 3명",
  parts: ["Library Developer"],
  overview: [
    <p>
      색상은 웹 접근성에서 중요한 요소이지만, 색각 이상자는 이를 정확히 인지하지
      못해 정보 전달에 어려움을 겪을 수 있습니다. 이를 보완하기 위한 접근성
      대응은 개발자의 몫이지만, 색각 이상을 고려한 UI 설계는 실제 개발 과정에서
      충분히 반영되지 못하고 있다는 문제점을 파악하였습니다.
    </p>,
    <p>
      이를 해결하기 위해 색각 이상 유형별 <BoldSpan>테마 생성</BoldSpan>부터{" "}
      <BoldSpan>테마 전환</BoldSpan>,{" "}
      <BoldSpan>색각 이상 시야 시뮬레이션</BoldSpan>까지 제공하는 Colbrush를
      기획하게 되었습니다.
    </p>,
  ],
  award: [
    {
      icon: OpensourceIcon,
      title: "오픈소스 개발자 대회",
      result: "동상 수상",
    },
    {
      icon: KIISIcon,
      title: "한국지능시스템학회 추계 학술대회",
      result: "우수 논문상 수상",
    },
  ],
  feature: {
    desc: (
      <p>
        Colbrush는 개발자가 정의한 CSS 변수를 기반으로, Protanopia(적색맹),
        Deuteranopia(녹색맹), Tritanopia(청색맹)에 최적화된{" "}
        <BoldSpan>접근성 컬러 테마를 자동으로 생성</BoldSpan>하고 기존 CSS
        파일에 추가하는 커맨드라인 도구입니다.
      </p>
    ),
    details: [
      {
        type: "descs",
        label: "주요 명령어",
        descs: [
          <p>
            <BoldSpan className={`font-space-mono`}>
              colbrush --generate
            </BoldSpan>{" "}
            : 색각 이상자를 위한 접근성 테마를 생성합니다.
          </p>,
        ],
      },
      {
        type: "descs",
        label: "Component",
        descs: [
          <p>
            <BoldSpan className={`font-space-mono`}>ThemeProvider</BoldSpan> :
            애플리케이션에 <BoldSpan>테마 기능을 전역적으로 제공</BoldSpan>하는
            Context Provider 입니다.
          </p>,
          <p>
            <BoldSpan className={`font-space-mono`}>ThemeSwitcher</BoldSpan> :
            사용자가 <BoldSpan>테마를 쉽게 변경</BoldSpan>할 수 있는 드롭다운 UI
            컴포넌트 입니다.
          </p>,
          <p>
            <BoldSpan className={`font-space-mono`}>SimulationFilter</BoldSpan>{" "}
            : 색각 이상 시야 시뮬레이션을 제공하는 UI 필터 컴포넌트 입니다.
          </p>,
        ],
      },
      {
        type: "descs",
        label: "Hook",
        descs: [
          <p>
            <BoldSpan className={`font-space-mono`}>useTheme</BoldSpan> : 현재
            테마 상태와 테마 변경, 언어 상태와 언어 변경을 제공하는 커스텀
            훅입니다.
          </p>,
        ],
      },
      {
        type: "img",
        label: "Sequence",
        img: "/projects/colbrush/sequence.png",
      },
    ],
  },
  contribution: [
    {
      label: "색상 변환 알고리즘 구현 및 최적화",
      desc: [
        "색상 변환 알고리즘을 설계·개발하여 처리 시간과 정확도 향상",
        "초기 DFS 기반 알고리즘을 CIE Lab 기반 알고리즘으로 최적화",
      ],
    },
    {
      label: "랜딩페이지 제작",
      desc: [
        "랜딩페이지 사용법 페이지 제작",
        "랜딩페이지를 통해 라이브러리 테스트 및 검증",
      ],
    },
  ],
  troubleShooting: [
    {
      label: "색상 변환 알고리즘의 한계",
      desc: [
        {
          trouble:
            "초기에는 DFS와 백트래킹을 기반으로 색상 변환 알고리즘을 설계했으나, CSS 색상 변수가 늘어남에 따라 처리 시간이 기하급수적으로 증가하여 실제 사용이 어려웠습니다.",
          solution:
            "기존 DFS 방식 대신 CIE Lab 기반 축 전환 알고리즘을 도입하여 처리 속도를 개선하고 정확도를 높였습니다.",
        },
      ],
    },
  ],
};

export const TRAVLOOM_DETAIL: ProjectDetail = {
  title: "떠나,봄",
  background: "/projects/travloom/Travloom.png",
  logo: (
    <ProjectLogo title={"떠나,봄"} className={`font-gmarket text-[#f1f3f4]`} />
  ),
  desc: "나만의 스마트 여행플래너",
  skills: [
    FigmaIcon,
    ReactIcon,
    NextjsIcon,
    TailwindIcon,
    SpringIcon,
    MysqlIcon,
    FirebaseIcon,
  ],
  links: [
    {
      icon: GithubIcon,
      link: "https://github.com/Travloom",
    },
    {
      icon: YoutubeIcon,
      link: "https://youtu.be/_1I8ueNvpi0",
    },
  ],
  period: "2025.04 ~ 2025.06",
  team: "2인 개발",
  parts: ["PM", "Design", "FE", "BE"],
  overview: [
    <p>
      코로나 이후 여행 수요가 급증했지만, 많은 사람들은 여전히 일정 계획에
      어려움을 겪고 있습니다. 특히 실시간으로 계획을 공유하거나 수정할 도구가
      없어 협업이 어렵다는 문제점을 파악하였습니다.{" "}
    </p>,
    <p>
      이를 해결하기 위해 <BoldSpan>AI 일정 추천</BoldSpan> 부터{" "}
      <BoldSpan>실시간 공유</BoldSpan>, <BoldSpan>기록 관리</BoldSpan> 등의
      기능을 제공하는 떠나,봄 서비스를 기획하게 되었습니다.
    </p>,
  ],
  feature: {
    desc: (
      <p>
        떠나,봄은 스마트 여행 플래너로 취향별 여행 추천부터 실시간 공유, 플랜
        히스토리 관리 기능까지 제공합니다
      </p>
    ),
    details: [
      {
        type: "descs",
        label: "취향별 여행 추천",
        descs: [
          <p>
            사용자의 취향에 따라 <BoldSpan>맞춤형 여행 일정</BoldSpan> 자동 추천
          </p>,
        ],
      },
      {
        type: "descs",
        label: "실시간 공유",
        descs: [
          <p>카카오톡 계정을 통해 쉽게 초대 가능</p>,
          <p>
            다른 사용자와 함께 <BoldSpan>실시간으로 일정 수정</BoldSpan> 가능
          </p>,
        ],
      },
      {
        type: "descs",
        label: "플랜 관리",
        descs: [
          <p>과거 여행 기록 및 다가오는 여행 일정 관리</p>,
          <p>캘린더 형식으로 한눈에 모아보기</p>,
          <p>다가오는 여행 일정 메일 알림</p>,
        ],
      },
    ],
  },
  contribution: [
    {
      label: "기획 및 디자인",
      desc: [
        "최근 시장 동향 분석 및 유사 서비스 조사를 통해 기획 방향을 수립했습니다.",
        "누구나 손쉽게 사용할 수 있도록 직관적인 UX로 설계했습니다.",
        "사용자가 여행의 설렘을 경험할 수 있는 따뜻한 톤의 UI로 설계했습니다.",
        "부드럽고 자연스러운 UI 애니메이션을 통해 서비스 전반에 감성적 연출을 구현했습니다.",
      ],
    },
    {
      label: "UI/UX 및 기능 구현",
      desc: [
        "초기 화면, 여행 일정, 마이페이지 및 캘린더 UI/UX를 구현했습니다.",
        "여행 일정에서 구글 맵 API를 연동하여 장소 검색 및 위치 확인을 할 수 있도록 구현했습니다.",
        "FullCalendar를 기반으로 자체 커스터마이징을 하여 서비스 특성에 최적화된 맞춤형 캘린더를 구현했습니다",
        "Modal 컴포넌트를 독립적으로 분리하여 DOM 리렌더링을 최소화하고, 사용자 인터랙션 성능을 최적화했습니다.",
      ],
    },
    {
      label: "Firebase Firestore 연동",
      desc: [
        "Firebase Firestore의 문서/컬렉션 구조를 활용하여 여행 일정 데이터를 효율적으로 설계하고 실시간 동기화가 가능하게 구현했습니다.",
        "회원 정보를 제외한 플랜 데이터를 Frontend에서 직접 처리하도록 설계하여 데이터 접근 속도를 향상시켰습니다.",
      ],
    },
    {
      label: "LLM 프롬프트 최적화",
      desc: [
        "여행 플랜을 추천 받는 과정에서의 프롬프트를 최적화하여 테마에 따라 다른 추천을 받을 수 있도록 수정했습니다.",
      ],
    },
  ],
  troubleShooting: [
    {
      label: "실시간 공유의 충돌 문제",
      desc: [
        {
          trouble:
            "여러 사용자가 하나의 여행 플랜을 동시에 수정할 경우, 각 클라이언트의 변경 사항이 setDoc을 통한 전체 문서 덮어쓰기로 반영되면서 다른 사용자의 일정이 유실되는 문제가 발생했습니다.",
          solution:
            "전체 문서를 덮어쓰는 setDoc 방식 대신 변경된 일정 데이터만 updateDoc으로 갱신하도록 구조를 개선했습니다. 또한 Firestore의 원자적 업데이트를 활용해 여러 사용자가 동시에 일정을 수정하더라도 서로의 변경 사항이 덮어쓰이지 않도록 데이터 정합성을 확보했습니다.",
        },
      ],
    },
    {
      label: "Modal 리렌더링 문제",
      desc: [
        {
          trouble:
            "Modal을 사용하는 과정에서 부모 컴포넌트의 상태 변경에 따라 Modal까지 불필요하게 리렌더링되는 문제가 발생했습니다. 일정 데이터가 많아질수록 사용자 인터랙션 과정에서 불필요한 렌더링이 발생할 가능성이 있었습니다.",
          solution:
            "Modal을 독립적인 컴포넌트로 분리하고 필요한 상태만 전달하도록 컴포넌트 구조를 개선했습니다. 이를 통해 부모 컴포넌트의 상태 변화와 Modal의 렌더링을 분리하여 불필요한 DOM 업데이트를 줄이고 인터랙션 성능을 개선했습니다.",
        },
      ],
    },
    {
      label: "LLM 추천 결과의 일관성 문제",
      desc: [
        {
          trouble:
            "동일한 여행 테마와 조건을 입력하더라도 LLM의 응답에 따라 추천 장소와 일정 구성에 차이가 크게 발생했습니다. 또한 서비스에서 요구하는 일정 형식과 다른 형태의 응답이 생성되는 경우가 발생했습니다.",
          solution:
            "여행 기간, 여행 테마, 추천 장소 등의 입력 조건을 프롬프트에 명확하게 정의하고, LLM이 반환해야 하는 일정의 구조와 제약 조건을 구체화했습니다. 이를 통해 사용자 취향에 따른 추천 결과를 유도하고 서비스에서 활용할 수 있는 형태로 응답의 일관성을 높였습니다.",
        },
      ],
    },
    {
      label: "장소 데이터의 한계",
      desc: [
        {
          trouble:
            "네이버 지도 API를 이용해 장소 검색 기능을 구현하던 중 검색 결과에서 제공되는 장소의 이미지 및 상세 위치 정보가 서비스에서 요구하는 수준에 미치지 못했습니다. 이로 인해 여행 장소를 탐색하고 일정을 구성하는 과정에서 필요한 정보를 충분히 제공하기 어려웠습니다.",
          solution:
            "장소 검색 및 상세 정보 제공에 필요한 데이터를 비교한 결과 Google Maps API로 전환했습니다. 장소의 위치 및 이미지 정보를 활용할 수 있도록 구현하고, 이를 기반으로 국내뿐만 아니라 해외 여행지까지 추천 범위를 확장했습니다.",
        },
      ],
    },
  ],
  images: [
    "/projects/travloom/travloom1_home.png",
    "/projects/travloom/travloom2_plan.png",
    "/projects/travloom/travloom3_map.png",
    "/projects/travloom/travloom4_mypage.png",
    "/projects/travloom/travloom5_calendar.png",
  ],
};

export const PHARMQUEST_DETAIL: ProjectDetail = {
  title: "어디약",
  background: "/projects/pharmquest/Pharmquest.png",
  logo: (
    <ProjectLogo title={"어디약"} className={`font-paperlogy text-[#f1f3f4]`} />
  ),
  desc: "해외 상비약 정보 및 약국 위치 제공 서비스",
  skills: [ReactIcon, NextjsIcon, TailwindIcon],
  links: [
    {
      icon: GithubIcon,
      link: "https://github.com/Pharmquest/FE",
    },
    {
      icon: YoutubeIcon,
      link: "https://vaulted-babcat-ad0.notion.site/3144c9768979808bbed4ebf49fc9cd28",
    },
  ],
  period: "2025.01 ~ 2025.02",
  team: "PM 1명, Design 1명, FE 4명, BE 5명",
  parts: ["FE"],
  overview: [
    <p>
      코로나 이후, 해외 여행객들이 꾸준히 증가함에 따라 해외 관광 시 건강 및
      안전 문제 위험성도 함께 증가했습니다. 하지만 모든 건강 문제를 예측하고,
      모든 상비약을 챙기는 것은 어렵다는 문제점을 파악하였습니다.{" "}
    </p>,
    <p>
      이를 해결하기 위해 상비약 정보와 약국 위치를 한 곳에서 제공하는 어디약
      서비스를 기획하게 되었습니다.
    </p>,
  ],
  feature: {
    desc: (
      <p>
        어디약은 상비약 리스트, 약국 찾기, 해외 인기 영양제, 커뮤니티 등의
        기능을 제공합니다.
      </p>
    ),
    details: [
      {
        type: "descs",
        label: "상비약 리스트",
        descs: [
          <p>증상별 상비약 리스트 제공</p>,
          <p>상비약 별 사용목적, 복용법, 경고 및 주의사항 제공</p>,
        ],
      },
      {
        type: "descs",
        label: "약국 찾기",
        descs: [
          <p>구글 맵 기반 약국 찾기 제공</p>,
          <p>검색을 통해 약국의 위치 확인 가능</p>,
        ],
      },
      {
        type: "descs",
        label: "해외 인기 영양제",
        descs: [
          <p>국가/기능 별 인기 영양제 제공</p>,
          <p>영양제 별 사용목적, 복용법, 경고 및 주의사항 제공</p>,
        ],
      },
      {
        type: "descs",
        label: "커뮤니티",
        descs: [
          <p>
            게시글 및 댓글 기능을 통해 사용자 간 해외 상비약 및 영양제 정보 공유
          </p>,
          <p>나의 게시글이나 댓글에 댓글/대댓글이 달릴 시 알림</p>,
        ],
      },
      {
        type: "descs",
        label: "마이페이지",
        descs: [<p>상비약, 약국, 영양제, 게시글 스크랩 및 찜하기</p>],
      },
    ],
  },
  contribution: [
    {
      label: "커뮤니티 구현",
      desc: [
        "글쓰기, 댓글/대댓글 달기, 좋아요, 신고하기 등 커뮤니티 기능을 구현했습니다.",
        "Tenstack Query를 통해 불필요한 API 호출을 줄이고 효율적인 비동기 처리했습니다.",
        "Custom Hook을 통해 커뮤니티 기능 내 반복 로직을 추상화하고, 코드 재사용성과 유지보수성을 향상시켰습니다.",
      ],
    },
    {
      label: "UI/UX 일관화",
      desc: [
        "개별 개발로 발생한 디자인 편차를 정리하고, 전체 서비스의 시각적 통일성과 사용자 경험을 개선했습니다.",
        "Modal 컴포넌트를 독립적으로 분리하여 DOM 리렌더링을 최소화하고, 공통적으로 사용할 수 있도록 구현했습니다.",
      ],
    },
  ],
  troubleShooting: [
    {
      label: "좋아요 중복 문제",
      desc: [
        {
          trouble:
            "좋아요 기능 구현 과정에서 사용자가 버튼을 빠르게 연속으로 클릭할 경우, 짧은 시간 내 동일한 요청이 여러 번 발생하여 좋아요 수가 실제 사용자 동작보다 많이 증가하는 문제가 발생했습니다.",
          solution:
            "좋아요 요청에 쓰로틀링을 적용하여 일정 시간 내 중복 요청이 반복적으로 전달되지 않도록 제한했습니다. 이를 통해 빠른 연속 클릭으로 발생하는 불필요한 서버 요청을 줄이고, 좋아요 수가 중복 반영되는 문제를 방지했습니다.",
        },
      ],
    },
  ],
  imageLabel: "주요 구현 UI",
  images: [
    "/projects/pharmquest/pharmquest1_community.png",
    "/projects/pharmquest/pharmquest2_create.png",
    "/projects/pharmquest/pharmquest3_post.png",
    "/projects/pharmquest/pharmquest4_activity.png",
  ],
};

export const EMOTREE_DETAIL: ProjectDetail = {
  title: "EMOTree",
  background: "/projects/emotree/EMOTree.png",
  logo: (
    <ProjectLogo title={"EMOTree"} className={`font-abel text-[#f1f3f4]`} />
  ),
  desc: "알렉시티미아를 위한 감정 훈련 플랫폼",
  skills: [
    FigmaIcon,
    ReactIcon,
    TailwindIcon,
    FastapiIcon,
    MysqlIcon,
    ChromaIcon,
    OpenAIIcon,
  ],
  links: [
    {
      icon: EmotreeIcon,
      link: "https://emotreee.vercel.app/",
    },
    {
      icon: GithubIcon,
      link: "https://github.com/EMOTreee",
    },
    {
      icon: YoutubeIcon,
      link: "https://youtu.be/b-ayNzCNt68",
    },
  ],
  period: "2025.11 ~ 2025.12",
  team: "5인 개발",
  parts: ["PM", "Design", "FE", "BE"],
  overview: [
    <p>
      <BoldSpan>알렉시티미아</BoldSpan>는 전체 인구에서 적지 않은 비율로
      나타나며, 최근 들어 그 비율이 증가하고 있습니다. 그러나 현대 사회에서
      감정을 인지하고 표현하는 것이 당연시 여겨져, 이를 지원하는 서비스는
      존재하지 않는다는 문제점을 파악했습니다.
    </p>,
    <p>
      이를 해결하기 위해 <BoldSpan>감정 인지, 공감, 표현 훈련</BoldSpan>을 제공
      하고, 개인 훈련 결과 기반의 월간 AI 레포트와 성장 기록 확인 기능을
      제공하는 EMOTree 서비스를 기획하게 되었습니다.
    </p>,
  ],
  award: [
    {
      icon: SKUnivIcon,
      title: "SK-AI-ON LLM 프로젝트 경진대회",
      result: "대상 수상",
    },
  ],
  feature: {
    desc: (
      <p>
        EMOTree는 감정 인지, 공감, 표현 트레이닝을 제공하는 감정 훈련
        플랫폼입니다.
      </p>
    ),
    details: [
      {
        type: "descs",
        label: "감정 인지 트레이닝",
        descs: [
          <p>
            AI를 통해 생성된 표정 이미지를 보고 감정을 맞추는 퀴즈 형식의 인지
            트레이닝
          </p>,
        ],
      },
      {
        type: "descs",
        label: "감정 공감 트레이닝",
        descs: [
          <p>AI를 통해 제공된 공감이 필요한 상황에 공감해보는 트레이닝</p>,
        ],
      },
      {
        type: "descs",
        label: "감정 표현 트레이닝",
        descs: [
          <p>선택한 감정을 표현해보는 트레이닝</p>,
          <p>음성, 표정 두 가지의 트레이닝 제공</p>,
        ],
      },
      {
        type: "descs",
        label: "성장 기록 및 AI 레포트",
        descs: [
          <p>월별 성장 기록 제공</p>,
          <p>월별 성장 기록 기반의 AI 레포트 제공</p>,
        ],
      },
    ],
  },
  contribution: [
    {
      label: "기획 및 디자인",
      desc: [
        "논문과 사례 연구를 포함한 시장 조사 결과를 바탕으로, 기획 전략을 수립했습니다.",
        "감정 중심 서비스에 최적화된 부드럽고 개성 있는 UI/UX를 구현하여, 감성적 인터랙션을 제공했습니다.",
        "감정에 따라 변화하는 색상을 적용하여, 인터랙션과 디자인이 자연스럽게 감정을 전달하도록 구현했습니다.",
      ],
    },
    {
      label: "UI/UX 및 기능 구현",
      desc: [
        "트레이닝과 성장 기록 등의 UI/UX 및 기능을 구현했습니다.",
        "React Bits 기반으로 여러 인터랙션을 설계하여, 사용자 경험의 몰입도와 반응성을 강화했습니다.",
      ],
    },
    {
      label: "LLM Memory 적용",
      desc: [
        "감정 공감 트레이닝에 Memory 기능을 도입하여 이전 시도 대비 개선 사항 및 피드백을 직관적으로 확인할 수 있도록 구현했습니다.",
      ],
    },
    {
      label: "공감 유형 분류",
      desc: [
        "사전 라벨링된 공감 유형 데이터를 기반으로 벡터 DB를 구축하여 공감 유형 분석 환경을 마련했습니다.",
        "사용자가 공감 트레이닝 중 입력한 메시지를 기반으로 공감 유형을 추론하도록 구현했습니다.",
      ],
    },
    {
      label: "성장 기록 및 AI 레포트",
      desc: [
        "스케줄러를 통해 월간 데이터를 기반으로 프롬프트를 생성하여 AI가 사용자 성장 기록을 분석한 맞춤형 레포트를 제공하도록 구현했습니다.",
      ],
    },
  ],
  troubleShooting: [
    {
      label: "감정 훈련 세션의 메모리 누수 문제",
      desc: [
        {
          trouble:
            "감정 훈련 세션에서 사용자의 카메라·마이크 스트림을 실시간으로 분석하는 과정에서, 훈련 세션을 반복해서 이동할수록 브라우저의 메모리 사용량이 지속적으로 증가하는 문제가 발생했습니다.",
          solution:
            "컴포넌트의 정리(cleanup) 시점에 카메라·마이크 스트림의 모든 트랙을 명시적으로 종료하도록 리소스 관리 로직을 재설계했습니다. 이를 통해 컴포넌트의 생명주기와 스트림 리소스의 생명주기를 일치시키고, 세션을 반복해서 이동하더라도 불필요한 리소스가 남지 않도록 하여 메모리 누수를 해결했습니다.",
        },
      ],
    },
    {
      label: "공감 유형 분류의 일관성 문제",
      desc: [
        {
          trouble:
            "LLM을 통해 사용자의 공감 메시지를 분류하는 과정에서 동일하거나 유사한 입력에도 공감 유형이 다르게 추론되는 등 결과의 일관성이 떨어지는 문제가 발생했습니다.",
          solution:
            "사전에 라벨링한 공감 유형 데이터를 임베딩하여 벡터 DB를 구축하고, 사용자 입력과 기존 데이터 간의 벡터 유사도를 비교하는 방식으로 분류 로직을 변경했습니다. 이를 통해 LLM의 생성 결과에 의존하지 않고 기존 데이터와의 유사성을 기준으로 공감 유형을 일관되게 판단하도록 개선했습니다.",
        },
      ],
    },
    {
      label: "단일 질의 기반 공감 피드백의 한계",
      desc: [
        {
          trouble:
            "기존 감정 공감 트레이닝은 사용자의 답변을 단일 질의로 LLM에 전달하는 방식으로 구현되어, 현재 입력에 대한 피드백만 제공할 수 있었습니다. 이로 인해 이전 트레이닝에서 어떤 답변을 했는지 고려하지 못해, 사용자의 공감 방식이 이전 시도 대비 어떻게 개선되었는지 확인하기 어려웠습니다.",
          solution:
            "사용자별 트레이닝 세션에 Memory를 적용하여 이전 대화와 피드백을 유지하도록 개선했습니다. 현재 답변을 이전 트레이닝 결과와 함께 분석할 수 있도록 프롬프트 구조를 변경하고, 이전 시도 대비 개선된 점과 보완이 필요한 부분을 제공하도록 구현했습니다. 이를 통해 단발성 피드백에서 벗어나 사용자의 공감 능력 변화를 지속적으로 확인할 수 있도록 개선했습니다.",
        },
      ],
    },
  ],
  images: [
    "/projects/emotree/emotree1_home.png",
    "/projects/emotree/emotree2_quiz.png",
    "/projects/emotree/emotree3_empathy.png",
    "/projects/emotree/emotree4_voice.png",
    "/projects/emotree/emotree5_expression.png",
    "/projects/emotree/emotree6_growth.png",
  ],
};

export const ONIER_DETAIL: ProjectDetail = {
  title: "ONIER",
  background: "/projects/onier/ONIER.png",
  logo: <ProjectLogo title={"ONIER"} className={`font-krona text-[#f1f3f4]`} />,
  desc: "시각장애인 검색 효율을 높히는 AI 확장프로그램",
  skills: [ReactIcon, TailwindIcon, ExtensionIcon],
  links: [
    {
      icon: GithubIcon,
      link: "https://github.com/D2S4-ONier",
    },
  ],
  period: "2025.09.12 ~ 2025.09.14",
  team: "Design 2명, FE 1명, BE 1명",
  parts: ["PM", "FE"],
  overview: [
    <p>
      많은 웹 서비스가 시각 중심으로 설계되어, 시각장애인은 정보를 효율적으로
      탐색하기 어렵습니다. 또한 기존 도구만으로는{" "}
      <BoldSpan>검색 및 정보 탐색에 상당한 시간이 소요</BoldSpan>된다는 문제점을
      파악했습니다.
    </p>,
    <p>
      이를 해결하기 위해 시각장애인을 위한 <BoldSpan>검색 효율 향상</BoldSpan>{" "}
      기능을 제공하고, 브라우저 확장 프로그램 형태로 쉽게 사용할 수 있는 ONIER를
      기획하게 되었습니다.
    </p>,
  ],
  award: [
    {
      icon: SKUnivIcon,
      title: "서경대 X 멋쟁이 사자처럼 해커톤",
      result: "최우수상 수상",
    },
  ],
  feature: {
    desc: (
      <p>
        ONIER는 음성을 통한 현재 페이지 요약 및 페이지 내 검색을 제공합니다.
      </p>
    ),
    details: [
      {
        type: "descs",
        label: "페이지 요약",
        descs: [<p>현재 페이지 내 정보를 요약하여 TTS를 통해 정보 제공</p>],
      },
      {
        type: "descs",
        label: "페이지 내 검색",
        descs: [
          <p>
            현재 페이지 내용 기반 질문 시 정보 탐색 후 TTS를 통해 정보 제공
          </p>,
        ],
      },
    ],
  },
  contribution: [
    {
      label: "기획 및 방향성 수립",
      desc: [
        "시각 장애인을 위한 웹 접근성 강화에 초점을 맞춰 서비스 기획과 설계 과정에 참여했습니다.",
        "검색 효율을 극대화하는 서비스의 특성을 고려하여, 기존 웹 개발 경험을 넘어 브라우저 확장 프로그램 형태로 방향을 설정하고 설계 및 구현에 참여했습니다.",
      ],
    },
    {
      label: "사용자 특성을 고려한 설계",
      desc: [
        "인터페이스 전반의 안내와 피드백을 음성으로 제공하도록 설계하여 접근성을 강화했습니다.",
        "모든 기능은 키보드 단축키로 접근 가능하도록 설계하여 시각장애 사용자도 효율적으로 사용할 수 있도록 구현했습니다.",
      ],
    },
  ],
  troubleShooting: [
    {
      label: "대화형 검색을 위한 세션 유지 문제",
      desc: [
        {
          trouble:
            "기존 구조에서는 음성 기반 검색이 단발성 요청으로 처리되어 사용자가 이전 질문을 기반으로 추가 질문을 이어가는 대화형 인터렉션이 불가능하다는 문제가 발생하였습니다.",
          solution:
            "세션 기반 상태 관리 구조를 도입하여 대화 맥락을 유지하도록 개선하여 단발성 검색에서 대화형 AI 검색 경험으로 확장하였습니다.",
        },
      ],
    },
  ],
  images: [
    "/projects/onier/onier1_init.png",
    "/projects/onier/onier2_home.png",
    "/projects/onier/onier3_summary.png",
    "/projects/onier/onier4_voice.png",
    "/projects/onier/onier5_result.png",
  ],
};

export const PORTFOLIO_DETAIL: ProjectDetail = {
  title: "Portfolio",
  background: "/projects/portfolio/Portfolio.png",
  logo: (
    <ProjectLogo
      title={"Portfolio"}
      className={`font-pretendard font-extrabold text-[#f1f3f4]`}
    />
  ),
  desc: "포트폴리오 사이트",
  skills: [FigmaIcon, ReactIcon, TailwindIcon],
  links: [
    {
      icon: GithubIcon,
      link: "https://github.com/jjjuni/portfolio",
    },
  ],
  period: "2026.02 ~ 진행 중",
  team: "개인 프로젝트",
  parts: ["Design", "FE"],
  overview: [
    <p>
      다양한 인터렉션 구현을 위해 도입해보고 싶었던 기술을 기반으로 시작된
      포트폴리오 프로젝트입니다. 기술 실험을 넘어 사용자 흐름에 자연스럽게
      녹아드는 경험을 설계하며 몰입도 높은 UI 구현에 집중했습니다. 또한, 기술
      도입 과정에서 발생하는 문제를 해결하며, 안정성과 완성도를 함께
      고려했습니다. 새로운 기술과 UI를 적용하며 지속적으로 개선해 나가고
      있습니다.
    </p>,
  ],
  feature: {
    desc: (
      <p>
        About - Skills - Projects로 구성하여 개발자로써의 방향성과 기술 역량,
        그리고 실제 경험을 단계적으로 확인할 수 있습니다.
      </p>
    ),
    details: [
      {
        type: "descs",
        label: "About",
        descs: [
          <p>간단한 소개와 개발자로서의 다양한 경험을 확인할 수 있습니다.</p>,
        ],
      },
      {
        type: "descs",
        label: "Skills",
        descs: [
          <p>다양한 경험을 통해 쌓아온 개발 역량들을 확인할 수 있습니다.</p>,
        ],
      },
      {
        type: "descs",
        label: "Projects",
        descs: [<p>지금까지 참여한 주요 프로젝트들을 확인할 수 있습니다.</p>],
      },
    ],
  },
  contribution: [
    {
      label: "디자인",
      desc: [
        "다양한 포트폴리오를 참고하여, 이를 바탕으로 고유한 디자인 아이덴티티를 구축했습니다.",
      ],
    },
    {
      label: "UI/UX 및 기능 구현",
      desc: [
        "macOS의 데스크톱 UI를 기반으로 아이콘, Dock, 윈도우 시스템을 웹에서 재구성하여 데스크톱 환경과 유사한 인터랙션을 구현했습니다.",
        "Framer Motion의 Drag Controls를 활용해 윈도우 이동과 아이콘 드래그를 구현하고, 윈도우의 열기·닫기 및 선택 상태를 일관된 방식으로 관리했습니다.",
        "Glassmorphism과 반투명 레이어, 블러 효과를 활용해 macOS의 시각적 특징을 구현하면서 콘텐츠의 가독성과 UI 계층 구조를 함께 고려했습니다.",
        "프로젝트 데이터를 기반으로 콘텐츠와 윈도우 컴포넌트를 분리하여, 새로운 프로젝트를 추가하더라도 기존 UI 로직을 재사용할 수 있도록 모듈화했습니다.",
      ],
    },
  ],
  troubleShooting: [
    {
      label: "윈도우 드래그 영역과 콘텐츠 인터랙션의 충돌 문제",
      desc: [
        {
          trouble:
            "윈도우에 Drag 이벤트를 적용한 상태에서 내부 콘텐츠를 스크롤하거나 버튼을 클릭할 때 드래그 이벤트가 함께 발생하여, 콘텐츠 조작과 윈도우 이동이 충돌하는 문제가 발생하였습니다.",
          solution:
            "Framer Motion의 useDragControls를 적용하여 Drag Listener를 비활성화하고, Title Bar의 Pointer 이벤트를 통해서만 드래그가 시작되도록 이벤트 영역을 명확하게 분리했습니다.",
        },
      ],
    },
  ],
};

export const SODOSIRO_DETAIL: ProjectDetail = {
  title: "소도시로",
  background: "/projects/sodosiro/Sodosiro.png",
  logo: (
    <ProjectLogo title={"소도시로"} className={`font-gmarket text-[#f1f3f4]`} />
  ),
  desc: "강원도 소도시 기반 AI 일정 추천 서비스",
  skills: [ReactIcon, ExpoIcon, TailwindIcon],
  links: [
    {
      icon: OnestoreIcon,
      link: "https://m.onestore.co.kr/v2/ko-kr/app/0001008443",
    },
    {
      icon: GithubIcon,
      link: "https://github.com/Sodosiro",
    },
  ],
  period: "2026.07 ~ 2026.09",
  team: "Design 1명, FE 2명, BE 2명",
  parts: ["FE"],
  overview: [
    <p>
      원특별자치도는 다양한 관광 자원을 보유하고 있지만, 일부 주요 관광지에
      관광객이 집중되면서 <BoldSpan>오버투어리즘 문제</BoldSpan>가 발생하고
      있으며, 상대적으로 소도시의 관광지는 충분히 알려지지 않고 있습니다. 또한
      여행자는 익숙한 주요 관광지 중심의 정보 속에서 새로운 여행지를 발견하고
      자신의 취향에 맞는 여행 일정을 계획하기 어려운 문제를 겪고 있습니다.
    </p>,
    <p>
      이를 해결하기 위해 강원도의 소도시 여행지를 탐색하고, AI를 통해 여행
      기간과 스타일에 맞는 여행 코스를 추천받을 수 있도록 하여 관광객의{" "}
      <BoldSpan>소도시 여행을 유도하고 관광 수요를 분산시키는</BoldSpan> 소도시
      특화 여행 서비스를 기획했습니다.
    </p>,
  ],
  feature: {
    desc: (
      <p>
        소도시로는 강원도의 다양한 여행지를 탐색하고, AI를 통해 나에게 맞는 여행
        코스를 만들 수 있는 여행 서비스입니다.
      </p>
    ),
    details: [
      {
        type: "descs",
        label: "강원도 여행지 탐색",
        descs: [
          <p>
            강원도의 다양한 관광지와 주변 여행지를 탐색하고 상세 정보를 확인
          </p>,
          <p>지도 기반으로 여행지의 위치를 확인하고 주변 관광지를 함께 탐색</p>,
        ],
      },
      {
        type: "descs",
        label: "축제 및 인기 관광지 탐색",
        descs: [
          <p>강원도에서 진행되는 다양한 축제 정보 제공</p>,
          <p>Daum 블로그·카페 관광지 언급량 기반 인기 관광지 제공</p>,
        ],
      },
      {
        type: "descs",
        label: "AI 여행 코스 추천",
        descs: [
          <p>여행 기간 및 여행 스타일 기반 맞춤형 여행 코스 생성</p>,
          <p>추천된 여행 일정과 이동 경로를 지도에서 함께 확인</p>,
        ],
      },
      {
        type: "descs",
        label: "GPS 기반 관광지 방문 인증",
        descs: [
          <p>GPS 위치 정보 기반 관광지 방문 여부 확인 및 인증</p>,
          <p>
            인증한 관광지를 빙고 보드에 반영, 조건 달성 시 소도시별 뱃지 획득
          </p>,
        ],
      },
      {
        type: "descs",
        label: "여행 피드 공유 및 관광지 발견",
        descs: [
          <p>다녀온 관광지의 여행 경험을 피드로 공유</p>,
          <p>
            다른 사용자의 여행 피드를 통해 새로운 관광지를 발견하고 관심 있는
            장소를 저장
          </p>,
        ],
      },
    ],
  },
  contribution: [
    {
      label: "React Native 기반 앱 구조 설계 및 구현",
      desc: [
        "서비스의 주요 기능과 사용자 흐름을 고려하여 화면 구조 및 네비게이션 구조를 설계했습니다.",
        "React Native와 Expo Router를 기반으로 각 기능을 모듈화하고 화면 간 이동 및 딥링크를 구현했습니다.",
      ],
    },
    {
      label: "카카오맵 WebView 연동",
      desc: [
        "React Native에서 카카오맵을 활용할 수 있도록 WebView 기반의 지도 환경을 구축했습니다.",
        "postMessage를 활용하여 React Native와 WebView 간 양방향 통신 구조를 구현했습니다.",
        "여행지 ID를 기반으로 앱의 일정 데이터와 지도 마커를 연결하여 지도와 일정이 하나의 흐름으로 동작하도록 구현했습니다.",
      ],
    },
    {
      label: "GPS 기반 관광지 방문 인증",
      desc: [
        "GPS 위치 정보를 기반으로 관광지 방문 여부를 확인하고 방문 인증을 처리했습니다.",
        "인증한 관광지를 빙고 보드에 반영하고, 조건을 달성하면 소도시별 뱃지를 획득할 수 있도록 구현했습니다.",
      ],
    },
    {
      label: "여행 피드 기능 구현",
      desc: [
        "사용자가 방문한 관광지의 여행 경험을 피드로 공유하고, 다른 사용자가 피드를 통해 새로운 관광지를 발견하고 저장할 수 있도록 탐색 및 저장 기능을 구현했습니다.",
      ],
    },
  ],
  troubleShooting: [
    {
      label: "React Native와 WebView 간 지도 데이터 동기화 문제",
      desc: [
        {
          trouble:
            "카카오맵을 WebView에서 구현하면서 React Native에서 관리하는 여행지 데이터와 WebView 내부의 지도 상태를 동기화해야 했습니다. 초기에는 지도 상태와 React Native의 상태가 서로 독립적으로 관리되면서 여행지 선택이나 일정 변경 시 지도 마커가 즉시 반영되지 않는 문제가 발생했습니다.",
          solution:
            "React Native와 WebView 간 postMessage 기반의 양방향 통신 구조를 구현했습니다. React Native에서 변경된 여행지 정보를 WebView로 전달하고, WebView에서는 지도 이벤트 및 선택된 장소 정보를 다시 React Native로 전달하도록 데이터 흐름을 구성했습니다. 이를 통해 앱의 여행 일정 상태와 지도 상태를 일관되게 유지할 수 있도록 개선했습니다.",
        },
      ],
    },
    {
      label: "지도 마커 클러스터링 상태 관리 문제",
      desc: [
        {
          trouble:
            "많은 여행지를 지도에 표시하기 위해 마커 클러스터링을 적용하는 과정에서, 지도에 표시되는 마커와 React Native에서 관리하는 여행지 상태가 서로 달라지는 문제가 발생했습니다. 특히 여행지를 추가하거나 선택한 후 마커를 갱신하는 과정에서 기존 마커가 남거나 선택 상태가 정상적으로 반영되지 않는 문제가 발생했습니다.",
          solution:
            "현재 지도에 바인딩된 마커를 별도로 추적할 수 있도록 참조 객체를 활용해 마커 상태를 관리하고, 여행지 데이터가 변경될 때 기존 마커와 변경된 데이터를 비교하여 필요한 마커만 갱신하도록 구조를 개선했습니다. 또한 WebView와의 메시지 통신을 통해 마커 상태를 동기화하여 지도에 표시되는 여행지와 앱의 데이터 상태가 일치하도록 개선했습니다.",
        },
      ],
    },
  ],
  images: [
    "/projects/sodosiro/sodosiro1_hero.png",
    "/projects/sodosiro/sodosiro2_roulette.png",
    "/projects/sodosiro/sodosiro3_region.png",
    "/projects/sodosiro/sodosiro4_course.png",
    "/projects/sodosiro/sodosiro5_trip.png",
    "/projects/sodosiro/sodosiro6_bingo.png",
  ],
};
