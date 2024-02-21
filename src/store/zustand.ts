import {create} from "zustand";

interface sideNavStoreState  {
    isActive: boolean;
    toggleActive: () => void;
}

export const useSideNavStore = create<sideNavStoreState>((set) => ({
    isActive: false,
    toggleActive: () => set((state) => ({ isActive: !state.isActive })),
}));
