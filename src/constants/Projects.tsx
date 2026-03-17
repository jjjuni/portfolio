import { ChromaIcon, ColbrushIcon, EmotreeIcon, FastapiIcon, FigmaIcon, FirebaseIcon, GithubIcon, KIISIcon, MysqlIcon, NextjsIcon, NpmIcon, OpenAIIcon, OpensourceIcon, ReactIcon, SKUnivIcon, SpringIcon, TailwindIcon, YoutubeIcon } from "../assets/svgs";
import BoldSpan from "../component/common/BoldSpan";
import ProjectLogo from "../component/common/ProjectLogo";

export const PROJECTS = [
  {
    id: 1,
    title: "어디약",
    desc: "해외 상비약 정보 및 약국 위치 제공 서비스",
    image: "/projects/Pharmquest.png",
    parts: ["FE"],
    skills: [ReactIcon, NextjsIcon, TailwindIcon]
  },
  {
    id: 2,
    title: "떠나,봄",
    desc: "나만의 AI 스마트 여행플래너",
    image: "/projects/Travloom.png",
    parts: ["PM", "Design", "FE", "BE"],
    skills: [FigmaIcon, ReactIcon, NextjsIcon, TailwindIcon, SpringIcon, FirebaseIcon, MysqlIcon]
  },
  {
    id: 3,
    title: "Colbrush",
    desc: "색각이상자를 위한 UI 테마 자동화 라이브러리",
    image: "/projects/Colbrush.png",
    parts: ["Library Development"],
    skills: [ReactIcon, TailwindIcon, NpmIcon]
  },
  {
    id: 4,
    title: "EMOTree",
    desc: "알렉시티미아를 위한 감정 훈련 플랫폼",
    image: "/projects/EMOTree.png",
    parts: ["PM", "Design", "FE", "BE"],
    skills: [FigmaIcon, ReactIcon, TailwindIcon, MysqlIcon, FastapiIcon, ChromaIcon, OpenAIIcon]
  }
]

export const COLBRUSH_DETAIL: ProjectDetail = {
  title: "Colbrush",
  background: "/projects/Colbrush.png",
  logo: <ProjectLogo title={"colbrush"} className={`font-racing bg-gradient-to-r from-[#ffffff] to-[#666666] bg-clip-text text-transparent px-1`} />,
  desc: "색각이상자를 위한 UI 테마 자동화 라이브러리",
  skills: [
    ReactIcon,
    TailwindIcon,
    NpmIcon,
  ],
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
    <p>색상은 웹 접근성에서 중요한 요소이지만, 색각 이상자는 이를 정확히 인지하지 못해 정보 전달에 어려움을 겪을 수 있습니다. 이를 보완하기 위한 접근성 대응은 개발자의 몫이지만, 색각 이상을 고려한 UI 설계는 실제 개발 과정에서 충분히 반영되지 못하고 있다는 문제점을 파악하였습니다.</p>,
    <p>이를 해결하기 위해 색각 이상 유형별 <BoldSpan>테마 생성</BoldSpan>부터 <BoldSpan>테마 전환</BoldSpan>, <BoldSpan>색각 이상 시야 시뮬레이션</BoldSpan>까지 제공하는 Colbrush를 기획하게 되었습니다.</p>
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
    desc: <p>Colbrush는 개발자가 정의한 CSS 변수를 기반으로, Protanopia(적색맹), Deuteranopia(녹색맹), Tritanopia(청색맹)에 최적화된 <BoldSpan>접근성 컬러 테마를 자동으로 생성</BoldSpan>하고 기존 CSS 파일에 추가하는 커맨드라인 도구입니다.</p>,
    details: [
      {
        type: "descs",
        label: "주요 명령어",
        descs: [
          <p><BoldSpan className={`font-space-mono`}>colbrush --generate</BoldSpan> : 색각 이상자를 위한 접근성 테마를 생성합니다.</p>,
        ]
      },
      {
        type: "descs",
        label: "Component",
        descs: [
          <p><BoldSpan className={`font-space-mono`}>ThemeProvider</BoldSpan> : 애플리케이션에 <BoldSpan>테마 기능을 전역적으로 제공</BoldSpan>하는 Context Provider 입니다.</p>,
          <p><BoldSpan className={`font-space-mono`}>ThemeSwitcher</BoldSpan> : 사용자가 <BoldSpan>테마를 쉽게 변경</BoldSpan>할 수 있는 드롭다운 UI 컴포넌트 입니다.</p>,
          <p><BoldSpan className={`font-space-mono`}>SimulationFilter</BoldSpan> : 색각 이상 시야 시뮬레이션을 제공하는 UI 필터 컴포넌트 입니다.</p>,
        ]
      },
      {
        type: "descs",
        label: "Hook",
        descs: [
          <p><BoldSpan className={`font-space-mono`}>useTheme</BoldSpan> : 현재 테마 상태와 테마 변경, 언어 상태와 언어 변경을 제공하는 커스텀 훅입니다.</p>,
        ]
      },
      {
        type: "img",
        label: "Sequence",
        img: "/projects/colbrush/sequence.png"
      }
    ]
  },
  contribution: [
    {
      label: "색상 변환 알고리즘 구현 및 최적화",
      desc: [
        "색상 변환 알고리즘을 설계·개발하여 처리 시간과 정확도 향상",
        "초기 DFS 기반 알고리즘을 CIE Lab 기반 알고리즘으로 최적화",
      ]
    },
    {
      label: "랜딩페이지 제작",
      desc: [
        "랜딩페이지 사용법 페이지 제작",
        "랜딩페이지를 통해 라이브러리 테스트 및 검증",
      ]
    },
  ],
  troubleShooting: [
    {
      label: "색상 변환 알고리즘의 한계",
      desc: [
        {
          trouble: "초기에는 DFS와 백트래킹을 기반으로 색상 변환 알고리즘을 설계했으나, CSS 색상 변수가 늘어남에 따라 처리 시간이 기하급수적으로 증가하여 실제 사용이 어려웠습니다.",
          solution: "기존 DFS 방식 대신 CIE Lab 기반 축 전환 알고리즘을 도입하여 처리 속도를 개선하고 정확도를 높였습니다."
        }
      ]
    },
  ],
}

export const TRAVLOOM_DETAIL: ProjectDetail = {
  title: "떠나,봄",
  background: "/projects/Travloom.png",
  logo: <ProjectLogo title={"떠나,봄"} className={`font-gmarket`} />,
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
    <p>코로나 이후 여행 수요가 급증했지만, 많은 사람들은 여전히 일정 계획에 어려움을 겪고 있습니다. 특히 실시간으로 계획을 공유하거나 수정할 도구가 없어 협업이 어렵다는 문제점을 파악하였습니다. </p>,
    <p>이를 해결하기 위해 <BoldSpan>AI 일정 추천</BoldSpan> 부터 <BoldSpan>실시간 공유</BoldSpan>, <BoldSpan>기록 관리</BoldSpan> 등의 기능을 제공하는 떠나,봄 서비스를 기획하게 되었습니다.</p>
  ],
  feature: {
    desc: <p>떠나,봄은 스마트 여행 플래너로 취향별 여행 추천부터 실시간 공유, 플랜 히스토리 관리 기능까지 제공합니다</p>,
    details: [
      {
        type: "descs",
        label: "취향별 여행 추천",
        descs: [
          <p>사용자의 취향에 따라 <BoldSpan>맞춤형 여행 일정</BoldSpan> 자동 추천</p>,
        ]
      },
      {
        type: "descs",
        label: "실시간 공유",
        descs: [
          <p>카카오톡 계정을 통해 쉽게 초대 가능</p>,
          <p>다른 사용자와 함께 <BoldSpan>실시간으로 일정 수정</BoldSpan> 가능</p>
        ]
      },
      {
        type: "descs",
        label: "플랜 관리",
        descs: [
          <p>과거 여행 기록과 다가오는 여행 일정을 따로 관리 할 수 있습니다.</p>,
          <p>캘린더 형식으로 한눈에 모아볼 수 있습니다.</p>,
          <p>다가오는 여행 일정을 메일로 받아 볼 수 있습니다.</p>
        ]
      },
    ]
  },
  contribution: [
    {
      label: "기획 및 디자인",
      desc: [
        "최근 시장 동향 분석 및 유사 서비스 조사를 통해 기획 방향을 수립했습니다.",
        "누구나 손쉽게 사용할 수 있도록 직관적인 UX로 설계했습니다.",
        "사용자가 여행의 설렘을 경험할 수 있는 따뜻한 톤의 UI로 설계했습니다.",
        "부드럽고 자연스러운 UI 애니메이션을 통해 서비스 전반에 감성적 연출을 구현했습니다.",
      ]
    },
    {
      label: "UI/UX 및 기능 구현",
      desc: [
        "초기 화면, 여행 일정, 마이페이지 및 캘린더 UI/UX를 구현했습니다.",
        "여행 일정에서 구글 맵 API를 연동하여 장소 검색 및 위치 확인을 할 수 있도록 구현했습니다.",
        "FullCalendar를 기반으로 자체 커스터마이징을 하여 서비스 특성에 최적화된 맞춤형 캘린더를 구현했습니다",
        "Modal 컴포넌트를 독립적으로 분리하여 DOM 리렌더링을 최소화하고, 사용자 인터랙션 성능을 최적화했습니다.",
      ]
    },
    {
      label: "Firebase Firestore 연동",
      desc: [
        "Firebase Firestore의 문서/컬렉션 구조를 활용하여 여행 일정 데이터를 효율적으로 설계하고 실시간 동기화가 가능하게 구현했습니다.",
        "회원 정보를 제외한 플랜 데이터를 Frontend에서 직접 처리하도록 설계하여 데이터 접근 속도를 향상시켰습니다.",
      ]
    },
    {
      label: "LLM 프롬프트 최적화",
      desc: [
        "여행 플랜을 추천 받는 과정에서의 프롬프트를 최적화하여 테마에 따라 다른 추천을 받을 수 있도록 수정했습니다.",
      ]
    },

  ],
  troubleShooting: [
    {
      label: "실시간 공유의 충돌 문제 ",
      desc: [
        {
          trouble: "실시간 공동 편집 기능을 구현하는 과정에서, 여러 사용자가 동시에 같은 일정 영역에 접근하는 상황에서 데이터 충돌과 손실 문제가 발생했습니다.",
          solution: "쓰로틀링을 적용하여 연속적인 업데이트를 제한하고 불필요한 요청을 최소화하였습니다."
        }
      ]
    }, {
      label: "장소 정보의 한계",
      desc: [
        {
          trouble: "네이버 지도 API를 사용하여 개발하던 중 장소의 위치, 이미지 등의 정보를 제공하지 않아 문제가 발생했습니다.",
          solution: "구글 맵 API를 사용하여 부족했던 정보를 수집하고 더 나아가 해외 여행 계획까지 추천하도록 확대했습니다."
        }
      ]
    },
  ],
  images: [
    "/projects/travloom/travloom1_home.png",
    "/projects/travloom/travloom2_plan.png",
    "/projects/travloom/travloom3_map.png",
    "/projects/travloom/travloom4_mypage.png",
    "/projects/travloom/travloom5_calendar.png",
  ]
}

export const PHARMQUEST_DETAIL: ProjectDetail = {
  title: "어디약",
  background: "/projects/Pharmquest.png",
  logo: <ProjectLogo title={"어디약"} className={`font-paperlogy`} />,
  desc: "해외 상비약 정보 및 약국 위치 제공 서비스",
  skills: [
    ReactIcon,
    NextjsIcon,
    TailwindIcon,
  ],
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
    <p>코로나 이후, 해외 여행객들이 꾸준히 증가함에 따라 해외 관광 시 건강 및 안전 문제 위험성도 함께 증가했습니다. 하지만 모든 건강 문제를 예측하고, 모든 상비약을 챙기는 것은 어렵다는 문제점을 파악하였습니다. </p>,
    <p>이를 해결하기 위해 상비약 정보와 약국 위치를 한 곳에서 제공하는 어디약 서비스를 기획하게 되었습니다.</p>
  ],
  feature: {
    desc: <p>어디약은 상비약 리스트, 약국 찾기, 해외 인기 영양제, 커뮤니티 등의 기능을 제공합니다.</p>,
    details: [
      {
        type: "descs",
        label: "상비약 리스트",
        descs: [
          <p>증상별 상비약 리스트 제공</p>,
          <p>상비약 별 사용목적, 복용법, 경고 및 주의사항 제공</p>,
        ]
      },
      {
        type: "descs",
        label: "약국 찾기",
        descs: [
          <p>구글 맵 기반 약국 찾기 제공</p>,
          <p>검색을 통해 약국의 위치 확인 가능</p>,
        ]
      },
      {
        type: "descs",
        label: "해외 인기 영양제",
        descs: [
          <p>국가/기능 별 인기 영양제 제공</p>,
          <p>영양제 별 사용목적, 복용법, 경고 및 주의사항 제공</p>,
        ]
      },
      {
        type: "descs",
        label: "커뮤니티",
        descs: [
          <p>게시글 및 댓글 기능을 통해 사용자 간 해외 상비약 및 영양제 정보 공유</p>,
          <p>나의 게시글이나 댓글에 댓글/대댓글이 달릴 시 알림</p>,
        ]
      },
      {
        type: "descs",
        label: "마이페이지",
        descs: [
          <p>상비약, 약국, 영양제, 게시글 스크랩 및 찜하기</p>,
        ]
      },
    ]
  },
  contribution: [
    {
      label: "커뮤니티 구현",
      desc: [
        "글쓰기, 댓글/대댓글 달기, 좋아요, 신고하기 등 커뮤니티 기능을 구현했습니다.",
        "Tenstack Query를 통해 불필요한 API 호출을 줄이고 효율적인 비동기 처리했습니다.",
        "Custom Hook을 통해 커뮤니티 기능 내 반복 로직을 추상화하고, 코드 재사용성과 유지보수성을 향상시켰습니다.",
      ]
    }, {
      label: "UI/UX 일관화",
      desc: [
        "개별 개발로 발생한 디자인 편차를 정리하고, 전체 서비스의 시각적 통일성과 사용자 경험을 개선했습니다.",
        "Modal 컴포넌트를 독립적으로 분리하여 DOM 리렌더링을 최소화하고, 공통적으로 사용할 수 있도록 구현했습니다.",
      ]
    },
  ],
  troubleShooting: [
    {
      label: "좋아요 중복 문제",
      desc: [
        {
          trouble: "좋아요 기능 구현 중 빠르게 누를 시 좋아요 수가 중복으로 올라가는 문제가 발생했습니다.",
          solution: "쓰로틀링을 적용하여 연속적인 업데이트를 제한하고 불필요한 요청을 최소화하였습니다."
        }
      ]
    },
  ],
  imageLabel: "주요 구현 UI",
  images: [
    "/projects/pharmquest/pharmquest1_community.png",
    "/projects/pharmquest/pharmquest2_create.png",
    "/projects/pharmquest/pharmquest3_post.png",
    "/projects/pharmquest/pharmquest4_activity.png",
  ]
}

export const EMOTREE_DETAIL: ProjectDetail = {
  title: "EMOTree",
  background: "/projects/EMOTree.png",
  logo: <ProjectLogo title={"EMOTree"} className={`font-abel`} />,
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
    <p><BoldSpan>알렉시티미아</BoldSpan>는 전체 인구에서 적지 않은 비율로 나타나며, 최근 들어 그 비율이 증가하고 있습니다. 그러나 현대 사회에서 감정을 인지하고 표현하는 것이 당연시 여겨져, <BoldSpan>이를 지원하는 서비스는 존재하지 않는다</BoldSpan>는 문제점을 파악했습니다.</p>,
    <p>이를 해결하기 위해 감정 인지, 공감, 표현 훈련을 제공하고, 개인 훈련 결과 기반의 월간 AI 레포트와 성장 기록 확인 기능을 제공하는 EMOTree 서비스를 기획하게 되었습니다.</p>
  ],
  award: [
    {
      icon: SKUnivIcon,
      title: "SK-AI-ON LLM 프로젝트 경진대회",
      result: "대상 수상",
    },
  ],
  feature: {
    desc: <p>EMOTree는 감정 인지, 공감, 표현 트레이닝을 제공하는 감정 훈련 플랫폼입니다.</p>,
    details: [
      {
        type: "descs",
        label: "감정 인지 트레이닝",
        descs: [
          <p>AI를 통해 생성된 표정 이미지를 보고 감정을 맞추는 퀴즈 형식의 인지 트레이닝</p>,
        ]
      },
      {
        type: "descs",
        label: "감정 공감 트레이닝",
        descs: [
          <p>AI를 통해 제공된 공감이 필요한 상황에 공감해보는 트레이닝</p>,
        ]
      },
      {
        type: "descs",
        label: "감정 표현 트레이닝",
        descs: [
          <p>선택한 감정을 표현해보는 트레이닝</p>,
          <p>음성, 표정 두 가지의 트레이닝 제공</p>,
        ]
      },
      {
        type: "descs",
        label: "성장 기록 및 AI 레포트",
        descs: [
          <p>월별 성장 기록 제공</p>,
          <p>월별 성장 기록 기반의 AI 레포트 제공</p>,
        ]
      },
    ]
  },
  contribution: [
    {
      label: "기획 및 디자인",
      desc: [
        "논문과 사례 연구를 포함한 시장 조사 결과를 바탕으로, 기획 전략을 수립했습니다.",
        "감정 중심 서비스에 최적화된 부드럽고 개성 있는 UI/UX를 구현하여, 감성적 인터랙션을 제공했습니다.",
        "감정에 따라 변화하는 색상을 적용하여, 인터랙션과 디자인이 자연스럽게 감정을 전달하도록 구현했습니다.",
      ]
    }, 
    {
      label: "UI/UX 및 기능 구현",
      desc: [
        "트레이닝과 성장 기록 등의 UI/UX 및 기능을 구현했습니다.",
        "React Bits 기반으로 여러 인터랙션을 설계하여, 사용자 경험의 몰입도와 반응성을 강화했습니다.",
      ]
    }, 
    {
      label: "LLM Memory 적용",
      desc: [
        "감정 공감 트레이닝에 Memory 기능을 도입하여 이전 시도 대비 개선 사항 및 피드백을 직관적으로 확인할 수 있도록 구현했습니다.",
      ]
    }, 
    {
      label: "공감 유형 분류",
      desc: [
        "사전 라벨링된 공감 유형 데이터를 기반으로 벡터 DB를 구축하여 공감 유형 분석 환경을 마련했습니다.",
        "사용자가 공감 트레이닝 중 입력한 메시지를 기반으로 공감 유형을 추론하도록 구현했습니다.",
      ]
    }, 
    {
      label: "성장 기록 및 AI 레포트",
      desc: [
        "스케줄러를 통해 월간 데이터를 기반으로 프롬프트를 생성하여 AI가 사용자 성장 기록을 분석한 맞춤형 레포트를 제공하도록 구현했습니다.",
      ]
    }, 
  ],
  troubleShooting: [
    {
      label: "공감 유형 분류의 일관성 문제",
      desc: [
        {
          trouble: "LLM을 통해 공감 유형을 분류하는 과정에서 사용자가 입력한 메시지에 대한 공감유형 추론 결과의 일관성 문제가 발생하였습니다.",
          solution: "LLM 대신 사전 라벨링된 데이터로 구축한 벡터 DB와의 유사도 분석을 활용하여 공감 유형 추론의 정확성과 일관성을 확보했습니다."
        }
      ]
    },
  ],
  images: [
    "/projects/emotree/emotree1_home.png",
    "/projects/emotree/emotree2_quiz.png",
    "/projects/emotree/emotree3_empathy.png",
    "/projects/emotree/emotree4_voice.png",
    "/projects/emotree/emotree5_expression.png",
    "/projects/emotree/emotree6_growth.png",
  ]
}