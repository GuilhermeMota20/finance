import type { SxProps, Theme } from "@mui/material";
import { pieArcLabelClasses } from "@mui/x-charts";

export const SxContainer: SxProps<Theme> = {
  display: "flex", flexDirection: "column"
};

export const SxPieChart: SxProps<Theme> = {
  [`& .${pieArcLabelClasses.root}`]: {
    fontWeight: "bold",
    fontSize: 14,
  },
};

export const SxTotalValue: SxProps<Theme> = {
  marginTop: 2,
  fontSize: 16,
  fontWeight: "normal",
  textAlign: "center",
};