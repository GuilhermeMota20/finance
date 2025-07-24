import type { SxProps, Theme } from "@mui/material";

export const SxBackdropCustom: SxProps<Theme> = (theme) => ({
  color: '#fff',
  zIndex: theme.zIndex.drawer + 1,
});

export const SxIconContainer: SxProps<Theme> = {
  padding: "1rem 2rem"
};

export const SxIcon: SxProps<Theme> = (theme) => ({
  color: theme?.palette?.primary?.main,
});