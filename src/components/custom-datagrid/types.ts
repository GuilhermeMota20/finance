import { GridColDef, GridValidRowModel } from "@mui/x-data-grid";

export type CustomDataGridProps<T extends GridValidRowModel> = {
  rows: T[];
  columns: GridColDef<T>[];
};