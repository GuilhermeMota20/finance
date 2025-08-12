import { Input, SelectBox } from '@components/form';
import { Close } from '@mui/icons-material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  Typography
} from '@mui/material';
import {
  DataGrid,
  GridValidRowModel
} from '@mui/x-data-grid';
import { ptBR } from '@mui/x-data-grid/locales';
import { useMemo, useState } from 'react';
import { SxDataGrid, SxDataGridFilter, SxDataGridFilterClose } from './styles';
import { CustomDataGridProps } from './types';

export function CustomDataGrid<T extends GridValidRowModel>({
  rows,
  columns,
  hiddenFields = ['actions']
}: CustomDataGridProps<T>) {
  const [openDrawerFilter, setOpenDrawerFilter] = useState(false);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [visibleColumns, setVisibleColumns] = useState<string[]>(
    columns.map((col) => col.field)
  );

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggleColumn = (selected: string[]) => {
    setVisibleColumns(selected);
  };

  const handleClearFilters = () => {
    setFilters({});
    setVisibleColumns(columns.map((col) => col.field));
  };

  const filteredRows = useMemo(() => {
    return rows.filter((row) =>
      Object.entries(filters).every(([field, value]) => {
        if (!value) return true;
        const cellValue = String((row as any)[field] ?? '').toLowerCase();
        return cellValue.includes(value.toLowerCase());
      })
    );
  }, [filters, rows]);

  const filteredColumns = useMemo(() => {
    return columns.filter((col) => visibleColumns.includes(col.field));
  }, [columns, visibleColumns]);

  return (
    <>
      <Stack spacing={4}>
        <Box>
          <Button
            size="small"
            color="secondary"
            variant='contained'
            startIcon={<FilterListOutlinedIcon />}
            onClick={() => setOpenDrawerFilter(true)}
          >
            Filtros
          </Button>
        </Box>

        <DataGrid
          disableColumnMenu
          disableRowSelectionOnClick
          rows={filteredRows}
          columns={filteredColumns}
          pageSizeOptions={[5, 10, 25, 50]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
          localeText={{
            ...ptBR.components.MuiDataGrid.defaultProps.localeText,
          }}
          sx={SxDataGrid}
        />
      </Stack>

      <Drawer
        anchor='left'
        variant="temporary"
        sx={SxDataGridFilter}
        open={openDrawerFilter}
        onClose={() => setOpenDrawerFilter(false)}
      >
        <Stack direction="row" alignItems="center">
          <Typography
            mb={4}
            fontSize={18}
            fontWeight='bold'
          >
            Filtros
          </Typography>

          <IconButton sx={SxDataGridFilterClose} onClick={() => setOpenDrawerFilter(false)}>
            <Close />
          </IconButton>
        </Stack>

        <Grid container spacing={2}>
          {columns
            .filter((col) => !hiddenFields.includes(col.field))
            .map((col) => (
              <Grid size={12} key={col.field}>
                <Input
                  fullWidth
                  size="small"
                  label={col.headerName ?? col.field}
                  name={col.field}
                  value={filters[col.field] || ''}
                  onChange={(e) =>
                    handleFilterChange(col.field, e.target.value)
                  }
                />
              </Grid>
            ))}

          <Grid size={12} >
            <SelectBox
              multiple
              size="small"
              name='visibleColumns'
              label="Mostrar colunas"
              value={visibleColumns}
              onChange={(e) =>
                handleToggleColumn(e.target.value as string[])
              }
              renderValue={(selected) =>
                (selected as string[]).length
                  ? (selected as string[]).join(', ')
                  : 'Nenhuma coluna selecionada'
              }
              sx={{ minWidth: 300 }}
            >
              {columns
                .filter((col) => !hiddenFields.includes(col.field))
                .map((col) => (
                  <MenuItem key={col.field} value={col.field}>
                    <Checkbox checked={visibleColumns.includes(col.field)} />
                    {col.headerName ?? col.field}
                  </MenuItem>
                ))}
            </SelectBox>
          </Grid>

          <Grid size={12}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleClearFilters}
            >
              Limpar filtros
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}
