import {create} from "zustand";

interface State  {
    isActive: boolean;
    toggleActive: () => void;
}

export const useSideNavStore = create<State>((set) => ({
    isActive: false,
    toggleActive: () => set((state) => ({ isActive: !state.isActive })),
}));
