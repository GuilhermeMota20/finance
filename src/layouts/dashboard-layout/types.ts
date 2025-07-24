import type { SxProps, Theme } from "@mui/material";

export type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

export type SxMainProps = (drawerWidth: number) => SxProps<Theme>;