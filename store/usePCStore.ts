import { create } from "zustand";

interface PCState {
  gpu: string | null;
  setGpu: (gpu: string | null) => void;
}

export const usePCStore = create<PCState>((set) => ({
  gpu: null,
  setGpu: (gpu) => set({ gpu }),
}));
