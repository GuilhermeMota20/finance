import type { SxProps, Theme } from "@mui/material";

export const SxInfoCard: SxProps<Theme> = (theme) => ({
  position: "relative",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: "100%",
  boxShadow: `0px 6px 0px ${theme?.palette?.primary?.main}`
});

export const SxInfoCardContent: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const SxIconCard: SxProps<Theme> = {
  position: "absolute",
  right: 8,
  top: 8
};