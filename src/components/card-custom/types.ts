import type { ReactNode } from "react"

export type CardCustomProps = {
  title: string;
  children: ReactNode;
  expanded?: boolean;
};