import type { SxProps, Theme } from "@mui/material";

export const SxDataGrid: SxProps<Theme> = (theme) => ({
  color: theme.palette.text.primary,
  background: theme.palette.background.paper,

  '& .MuiDataGrid-columnHeaders, & .MuiDataGrid-columnHeader': {
    backgroundColor: theme.palette.background.paper,
  },

  '& .MuiDataGrid-row:hover': {
    backgroundColor: theme.palette.action.hover,
  },
});