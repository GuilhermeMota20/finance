import type { LayoutProps } from "../layouts/dashboard-layout/types";

export type Routes = {
  path: string;
  element: React.ElementType;
  permission: string[];
  layout?: React.FC<LayoutProps>
};
