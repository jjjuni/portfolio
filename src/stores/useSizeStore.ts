import { create } from "zustand";

interface SizeState {
  width: number;
  height: number;
  isMobile: boolean;
  setSize: (width: number, height: number) => void;
}

export const useSizeStore = create<SizeState>((set) => ({
  width: 0,
  height: 0,
  isMobile: window.innerWidth < 768,
  setSize: (width, height) => set({ width, height, isMobile: width < 768 }),
}));