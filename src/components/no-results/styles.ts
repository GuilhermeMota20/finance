import { SxProps, Theme } from "@mui/material";

export const SxNoResults: SxProps<Theme> = (theme) => ({
  border: `1px dashed ${theme?.palette?.divider}`,
  borderRadius: "4px",
  padding: 4
});