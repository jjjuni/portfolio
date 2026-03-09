// HEADER 
export const headerTriggerConfig = {
  id: "Header-trigger",
  trigger: "#Header",
  start: "top top",
  end: "+=1",
  scrub: false,
  toggleActions: "play none none reverse",
  invalidateOnRefresh: true,
}

// ABOUT 섹션
export const profileTriggerConfig = {
  id: "Profile-trigger",
  trigger: "#About",
  start: "top+=240 top",
  end: "+=25%",
  pin: false,
  pinSpacing: false,
  scrub: false,
  toggleActions: "play none none reverse",
}

export const aboutTriggerConfig = {
  id: "About-trigger",
  trigger: "#About",
  start: "top top",
  end: "+=125%",
  scrub: 1,
  pin: true,
  pinSpacing: false,
  markers: true,
}

// SKILLS 섹션
export const skillsTriggerConfig = {
  id: "Skills-trigger",
  trigger: "#Skills",
  start: "top top",
  end: "+=100%",
  scrub: 1,
  pin: true,
  pinSpacing: false,
  markers: true,
}

// PROJECTS 섹션
export const projectsTriggerConfig = {
  id: "Projects-trigger",
  trigger: "#Projects",
  start: "top top",
  end: "+=100%",
  scrub: 1,
  pin: true,
  markers: true,
}

// CLOSING 섹션
export const closingTriggerConfig = {
  id: "Closing-trigger",
  trigger: "#Closing",
  start: "top bottom",
  end: "+=100%",
  scrub: 1,
  markers: true,
}

export const closeHeaderConfig = {
  id: "CloseHeader-trigger",
  trigger: "#Closing",
  start: "top 80px",
  end: "+=80",
  scrub: true,
  markers: true,
}