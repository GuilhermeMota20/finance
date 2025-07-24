import { SxProps, Theme } from "@mui/material";

export const SxNotFoundContainer: SxProps<Theme> = {
  minWidth: "100%",
  minHeight: "80vh",
  alignItems: 'center',
  justifyContent: 'center',
};

export const SxNotFoundCard: SxProps<Theme> = (theme) => ({
  position: "relative",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: "100%",
  minWidth: "60%",
  boxShadow: `0px 6px 0px ${theme?.palette?.error?.main}`
});

export const SxNotFoundContent: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
};

export const SxNotFoundIcon: SxProps<Theme> = (theme) => ({
  fontSize: 84,
  color: theme?.palette?.error?.main
});