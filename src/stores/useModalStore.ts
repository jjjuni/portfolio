import { create } from 'zustand';

type ModalState = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  currentProject: string | null;
  setCurrentProject: (value: string | null) => void;
}

const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  currentProject: null,

  setIsModalOpen(value) {
    set({
      isModalOpen: value
    })
  },
  setCurrentProject(value) {
    set({
      currentProject: value
    })
  },
}))

export default useModalStore;