import { create } from "zustand";
import { UseBackdropLoadingType } from "./types";

export const useBackdropLoading = create<UseBackdropLoadingType>((set, _get) => ({
  openStates: undefined,
  setOpenStates: (data) => set(() => ({ openStates: data })),
}));

