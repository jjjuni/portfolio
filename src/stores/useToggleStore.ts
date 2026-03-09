import { create } from "zustand";

interface ToggleState {
  currentToggle: string;
  setCurrentToggle: (value: string) => void;
}

const useToggleStore = create<ToggleState>((set) => ({
  currentToggle: "HEADER",
  setCurrentToggle(value) {
    set({ currentToggle: value })
  },
}))

export default useToggleStore;