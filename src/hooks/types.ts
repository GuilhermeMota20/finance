import { NewFinanceType } from "@pages/dashboard/types";
import type { ReactNode } from "react";

export type NavigationModule = { navTree: () => NavigationItem[] };
export interface NavigationItem {
    text: string;
    icon?: ReactNode;
    path?: string;
    items?: NavigationItem[];
};

export type GlobalsModalType = {
  selectedFinance: NewFinanceType | undefined;
  setSelectedFinance: (data: NewFinanceType | undefined) => void;

  isOpenNewFinance: boolean;
  onOpenNewFinance: () => void;
  onCloseNewFinance: () => void;

  isOpenDeleteFinance: boolean;
  onOpenDeleteFinance: () => void;
  onCloseDeleteFinance: () => void;
};
