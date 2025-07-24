import type { Theme } from "@emotion/react";
import type { SxProps } from "@mui/material";

export type DrawerCustomProps = {
  drawerWidth: number;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export type DrawerNavProps = {
  setMobileOpen?: React.Dispatch<React.SetStateAction<boolean>>
};

export type SxDrawerProps = (drawerWidth: number) => SxProps<Theme>;
