import { AwsIcon, ChromaIcon, DockerIcon, FastapiIcon, FigmaIcon, FirebaseIcon, GitactionIcon, GsapIcon, JavaIcon, JsIcon, MongodbIcon, MysqlIcon, NextjsIcon, NginxIcon, OpenAIIcon, PythonIcon, ReactIcon, SpringIcon, TailwindIcon, TsIcon, VercelIcon } from "../assets/svgs";

export const FRONTEND_SKILLS = [
  {
    Logo: JsIcon,
    title: "JavaScript",
    descList: [
      "비동기 처리(Promise, async/await) 기반 데이터 흐름 설계",
      "이벤트 기반 인터랙션 및 동적 UI 구현",
      "ES6+ 문법을 활용한 모듈화 구조 설계"
    ]
  },
  {
    Logo: TsIcon,
    title: "TypeScript",
    descList: [
      "정적 타입 기반 안정적인 코드 설계",
      "제네릭과 유틸 타입을 활용한 재사용 가능한 컴포넌트 작성",
      "API 응답 타입 정의 및 타입 안전성 보장"
    ]
  },
  {
    Logo: ReactIcon,
    title: "React",
    descList: [
      "Hooks 기반 상태 관리 및 로직 분리",
      "컴포넌트 단위 아키텍처 설계",
      "SPA 환경에서의 동적 렌더링 최적화"
    ]
  },
  {
    Logo: NextjsIcon,
    title: "Next.js",
    descList: [
      "SSR/CSR 전략 설계 및 SEO 최적화",
      "파일 기반 라우팅 및 동적 라우트 구성",
      "API Route를 활용한 서버 기능 구현"
    ]
  },
  {
    Logo: TailwindIcon,
    title: "Tailwind CSS",
    descList: [
      "유틸리티 기반 반응형 UI 설계",
      "디자인 시스템 구축 및 일관된 스타일 관리",
      "커스텀 테마 및 다크모드 구현"
    ]
  },
  {
    Logo: GsapIcon,
    title: "GSAP",
    descList: [
      "스크롤 기반 인터랙션 애니메이션 구현",
      "타임라인 제어를 통한 정교한 모션 설계",
      "UI/UX 흐름을 고려한 사용자 경험 강화"
    ]
  },
  {
    Logo: VercelIcon,
    title: "Vercel",
    descList: [
      "Next.js 프로젝트 배포 및 환경 변수 관리",
      "Preview 배포를 통한 협업 환경 구성",
      "Edge Network 기반 빠른 서비스 제공"
    ]
  },
  {
    Logo: FigmaIcon,
    title: "Figma",
    descList: [
      "Auto Layout 기반 UI 설계",
      "컴포넌트 시스템 및 디자인 토큰 관리",
      "개발 관점에서 구현 가능한 디자인 설계"
    ]
  },
]


export const BACKEND_SKILLS = [
  {
    Logo: JavaIcon,
    title: "Java",
    descList: [
      "객체지향 설계 기반 비즈니스 로직 구현",
      "컬렉션과 스트림 API를 활용한 데이터 처리",
      "레이어드 아키텍처 기반 서버 구조 설계"
    ]
  },
  {
    Logo: SpringIcon,
    title: "Spring",
    descList: [
      "RESTful API 설계 및 구현",
      "JWT 기반 인증/인가 처리",
      "JPA를 활용한 데이터베이스 연동"
    ]
  },
  {
    Logo: PythonIcon,
    title: "Python",
    descList: [
      "데이터 처리 및 자동화 스크립트 작성",
      "API 서버 및 간단한 백엔드 로직 구현",
      "비동기 기반 서버 구조 설계"
    ]
  },
  {
    Logo: FastapiIcon,
    title: "FastAPI",
    descList: [
      "고성능 비동기 API 서버 구현",
      "Pydantic 기반 데이터 검증",
      "Swagger 자동 문서화 활용"
    ]
  },
  {
    Logo: MysqlIcon,
    title: "MySQL",
    descList: [
      "정규화 기반 데이터베이스 설계",
      "복잡한 JOIN 및 쿼리 최적화",
      "인덱스 설계를 통한 성능 개선"
    ]
  },
  {
    Logo: MongodbIcon,
    title: "MongoDB",
    descList: [
      "NoSQL 기반 유연한 스키마 설계",
      "Aggregation 파이프라인 활용",
      "실시간 데이터 처리 구조 설계"
    ]
  },
  {
    Logo: FirebaseIcon,
    title: "Firebase",
    descList: [
      "Authentication 기반 사용자 관리",
      "Firestore를 활용한 실시간 데이터 처리",
      "Hosting 및 간편 배포 환경 구성"
    ]
  },
  {
    Logo: ChromaIcon,
    title: "ChromaDB",
    descList: [
      "임베딩 기반 벡터 데이터 저장 및 관리",
      "유사도 검색을 활용한 RAG 구조 구현",
      "FastAPI와 연동하여 AI 검색 API 서버 구성"
    ]
  },
  {
    Logo: OpenAIIcon,
    title: "OpenAI API",
    descList: [
      "LLM API 연동 및 응답 파이프라인 구축",
      "프롬프트 엔지니어링을 통한 결과 최적화",
      "벡터 DB를 활용한 RAG 구조 구현"
    ]
  }
]


export const INFRA_SKILLS = [
  {
    Logo: NginxIcon,
    title: "Nginx",
    descList: [
      "리버스 프록시 및 로드밸런싱 설정",
      "HTTPS 인증서 적용 및 보안 설정",
      "정적 파일 서빙 최적화"
    ]
  },
  {
    Logo: GitactionIcon,
    title: "GitAction",
    descList: [
      "CI/CD 파이프라인 구축",
      "빌드 및 테스트 자동화",
      "자동 배포 워크플로우 구성"
    ]
  },
  {
    Logo: AwsIcon,
    title: "AWS",
    descList: [
      "EC2 기반 서버 배포 및 운영",
      "S3 정적 파일 관리",
      "보안 그룹 및 네트워크 설정"
    ]
  },
  {
    Logo: DockerIcon,
    title: "Docker",
    descList: [
      "애플리케이션 컨테이너화",
      "Docker Compose 기반 멀티 서비스 구성",
      "배포 환경 일관성 유지"
    ]
  },
]