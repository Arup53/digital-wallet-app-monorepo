import { create } from "zustand";

export const useStore = create((set) => ({
  balance: 0,
  increaseBalance: () => set((state) => ({ bears: state.balance + 1 })),
}));
