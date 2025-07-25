import type { SxProps, Theme } from "@mui/material";

export const SxBackdropCustom: SxProps<Theme> = (theme) => ({
  color: '#fff',
  zIndex: theme.zIndex.drawer + 1,
});

export const SxIconContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
  padding: "1rem 2rem"
};

export const SxIcon: SxProps<Theme> = (theme) => ({
  color: theme?.palette?.primary?.main,
});