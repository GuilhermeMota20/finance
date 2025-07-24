import { create } from "zustand";
import { GlobalsModalType } from "./types";

export const useModalGlobals = create<GlobalsModalType>((set, _get) => ({
  selectedFinance: undefined,
  setSelectedFinance: (data) => set({ selectedFinance: data }),

  isOpenNewFinance: false,
  onOpenNewFinance: () => set({ isOpenNewFinance: true }),
  onCloseNewFinance: () => set({ isOpenNewFinance: false }),

  isOpenDeleteFinance: false,
  onOpenDeleteFinance: () => set({ isOpenDeleteFinance: true }),
  onCloseDeleteFinance: () => set({ isOpenDeleteFinance: false }),
}));

