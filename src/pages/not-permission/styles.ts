import { SxProps, Theme } from "@mui/material";

export const SxNotPermissionContainer: SxProps<Theme> = {
  minWidth: "100%",
  minHeight: "80vh",
  alignItems: 'center',
  justifyContent: 'center',
};

export const SxNotPermissionCard: SxProps<Theme> = (theme) => ({
  position: "relative",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: "100%",
  minWidth: "60%",
  boxShadow: `0px 6px 0px ${theme?.palette?.warning?.main}`
});

export const SxNotPermissionContent: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
};

export const SxNotPermissionIcon: SxProps<Theme> = (theme) => ({
  fontSize: 84,
  color: theme?.palette?.warning?.main
});