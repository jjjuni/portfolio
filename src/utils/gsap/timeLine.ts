// HEADER
export const headerTimeline = (tl: gsap.core.Timeline) => {
  tl.fromTo("#Header", { yPercent: 0, y: 0 }, { yPercent: -100, y: () => (window.innerWidth < 768 ? 60 : 80), duration: 0.8, }, 0);
  tl.fromTo("#HeaderBg", { opacity: 1 }, { opacity: 0 }, 0);
  tl.fromTo(".initial-title", { opacity: 0.6 }, { opacity: 0 }, 0);
  tl.fromTo(".initial-header", { opacity: 1 }, { opacity: 0 }, 0);
  tl.fromTo(".header-toggle", { color: "#000000" }, { color: "#acacac", duration: 0.1 }, 0);
  tl.fromTo(".github-icon", { color: "black" }, { color: "white", duration: 0.1 }, 0);
}

// ABOUT 섹션
export const profileTimeLine = (tl: gsap.core.Timeline) => {
  tl.fromTo(
    "#Profile",
    { opacity: 1, x: 0, y: 0 },
    {
      opacity: 0,
      y: () => (window.innerWidth > 768 ? -20 : -100),
      ...(window.innerWidth > 768 ? {} : { height: 0 }),
      ease: "power1.inOut",
      duration: (window.innerWidth > 768 ? 0.8 : 0.4),
    }
  );

  tl.fromTo("#Experience_ex",
    { opacity: 0, height: 0 },
    { opacity: 1, height: "auto", ease: "power1.inOut", duration: 0.8 },
    "<"
  );
}

export const aboutTimeLine = (tl: gsap.core.Timeline) => {
  tl.fromTo("#About",
    { opacity: 1, y: 0 },
    { opacity: 0, y: -80 },
    0.8
  );
}

// SKILLS 섹션
export const skillsTimeline = (tl: gsap.core.Timeline) => {
  tl.fromTo(
    "#Skills",
    { opacity: 0, y: 80 },
    { opacity: 1, y: 0, duration: 0.4 }
  );

  tl.fromTo({}, {}, { duration: 0.4 });

  tl.fromTo(
    "#Skills",
    { opacity: 1, y: 0 },
    { opacity: 0, y: -80, display: "none", pointerEvents: "none", duration: 0.4 }
  );
};

// PROJECTS 섹션
export const projectsTimeline = (tl: gsap.core.Timeline) => {
  tl.fromTo("#Projects",
    { opacity: 0, y: 80 },
    { opacity: 1, y: 0, duration: 0.2 }
  );

  tl.fromTo({}, {}, { duration: 0.4 });
}

// CLOSING 섹션
export const closingTimeline = (tl: gsap.core.Timeline) => {
  tl.fromTo("#ClosingBg",
    { opacity: 0 },
    { opacity: 1 }
  );
  tl.fromTo("#Closing-comment",
    { opacity: 0 },
    { opacity: 1 }
  );
}

export const closeHeaderTimeline = (tl: gsap.core.Timeline) => {
  tl.fromTo("#Header",
    { y: () => (window.innerWidth < 768 ? 60 : 80) },
    { y: 0, ease: "none" },
  );
}