import { create } from "zustand";

interface DeviceState {
  width: number;
  height: number;
  isMobile: boolean;
  isTouchDevice: boolean;
  setSize: (width: number, height: number) => void;
  setIsTouchDevice: (value: boolean) => void;
}

export const useDeviceStore = create<DeviceState>((set) => ({
  width: 0,
  height: 0,
  isMobile: window.innerWidth < 768,
  isTouchDevice: false,
  setSize: (width, height) => set({ width, height, isMobile: width < 768 }),
  setIsTouchDevice(value) {
    set({isTouchDevice: value})
  },
}));