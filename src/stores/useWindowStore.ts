import { create } from "zustand";

type ModalState = {
  isProjectWindowOpen: boolean;
  setIsProjectWindowOpen: (value: boolean) => void;
  currentProject: string | null;
  setCurrentProject: (value: string | null) => void;

  activeWindow: "window" | "projectWindow";
  setActiveWindow: (value: "window" | "projectWindow") => void;
};

const useWindowStore = create<ModalState>((set) => ({
  isProjectWindowOpen: false,
  currentProject: null,
  activeWindow: "window",

  setIsProjectWindowOpen(value) {
    set({
      isProjectWindowOpen: value,
    });
  },
  setCurrentProject(value) {
    set({
      currentProject: value,
    });
  },
  setActiveWindow(value) {
    set({
      activeWindow: value,
    });
  },
}));

export default useWindowStore;
