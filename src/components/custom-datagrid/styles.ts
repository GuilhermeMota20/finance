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

export const SxDataGridFilter: SxProps<Theme> = {
  '& .MuiDrawer-paper': {
    width: { xs: '100%', sm: 400 },
    padding: 2,
    boxSizing: 'border-box',
  }
};

export const SxDataGridFilterClose: SxProps<Theme> = {
  position: 'absolute',
  top: 2,
  right: 2,
};
