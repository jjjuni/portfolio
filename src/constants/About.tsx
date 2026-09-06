import { DayIcon, EmailIcon, PhoneIcon, PinIcon } from "../assets/svgs";

export const PROFILE = {
  name: "이준희",
  overview: "보이는 화면 이전에, 보이지 않는 경험을 설계합니다.",
  description: (
    <p>
      저에게 프론트엔드는 화면을 그리는 일이 아니라,
      <br />
      사용자의 경험과 맥락을 설계하는 일입니다.
      <br />
      보이지 않는 경험을 얼마나 정교하게 만들 수 있는지가
      <br />
      결과의 차이를 만든다고 생각합니다.
    </p>
  ),
};

export const PROFILE_DETAIL = [
  {
    icon: DayIcon,
    title: "Date of Birth",
    content: "10 Feb, 2001",
  },
  {
    icon: PhoneIcon,
    title: "Phone Number",
    content: "010-9278-3714",
  },
  {
    icon: EmailIcon,
    title: "Email",
    content: "0210leejun@gmail.com",
  },
  {
    icon: PinIcon,
    title: "Address",
    content: "서울특별시 성북구",
  },
];

export const EXPERIENCES = [
  {
    section: "학력",
    title: "서경대학교",
    description: "소프트웨어학과 학사",
    date: "2020.03 ~ 2026.02",
  },
  {
    section: "활동",
    title: "University MakeUs Challenge",
    description: "7기 Web 파트원",
    date: "2024.09 ~ 2025.02",
  },
];

export const ACHIVEMENTS = [
  {
    section: "자격증",
    contents: [
      {
        title: "정보처리기사",
        date: "2025.09",
        award: null,
      },
    ],
  },
  {
    section: "수상",
    contents: [
      {
        title: "서경대 X 멋쟁이 사자처럼 해커톤",
        date: "2025.09",
        award: "최우수상",
      },
      {
        title: "SK-AI-ON LLM 프로젝트 경진대회",
        date: "2025.12",
        award: "대상",
      },
      {
        title: "오픈소스 개발자 대회",
        date: "2025.12",
        award: "기업 대표상",
      },
      {
        title: "한국지능시스템학회 추계 학술대회",
        date: "2026.01",
        award: "우수 논문상",
      },
    ],
  },
];
