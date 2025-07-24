import type { SxProps, Theme } from "@mui/material";

export type SxAppBarCustomProps = (drawerWidth?: number, theme?: Theme) => SxProps<Theme>;

export type AppBarCustomProps = {
  drawerWidth?: number;
  mobileOpen?: boolean;
  setMobileOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ResponseDetailsUser = {
  id: string;
  name: string;
  familyName: string;
  email: string;
};