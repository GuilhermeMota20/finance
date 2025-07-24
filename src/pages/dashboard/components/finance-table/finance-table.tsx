import { useGetAllFinanceApi } from '@api/get-all-finance';
import { useModalGlobals } from '@hooks/useGlobalModals';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { ptBR } from '@mui/x-data-grid/locales';
import { NewFinanceType } from '@pages/dashboard/types';
import { formatDateBR } from '@utils/format-date-to-br';
import { getDateValue } from '@utils/get-date-value';
import { maskCurrencyBRL } from '@utils/mask-currency-brl';
import { SxDataGrid } from './styles';

export const FinanceTable = () => {
  const { allFinances } = useGetAllFinanceApi();
  const { onOpenDeleteFinance, setSelectedFinance } = useModalGlobals();

  const handleSelectedFinance = (data: NewFinanceType | undefined) => {
    onOpenDeleteFinance();
    setSelectedFinance(data);
  };

  const columns: GridColDef<NewFinanceType>[] = [
    { field: 'descricao', headerName: 'Descrição', flex: 1 },
    { field: 'categoria', headerName: 'Categoria', flex: 1 },
    { field: 'metodoPagamento', headerName: 'Método de pagamento', flex: 1 },
    { field: 'tipo', headerName: 'Tipo', flex: 1 },
    {
      field: 'valor',
      headerName: 'Valor (R$)',
      type: 'number',
      flex: 1,
      // valueGetter: (value) => getCurrencyValue(value),
      valueFormatter: (value) => maskCurrencyBRL(value),
    },
    {
      field: 'data',
      headerName: 'Data',
      flex: 1,
      valueGetter: (value) => getDateValue(value),
      valueFormatter: (value) => formatDateBR(value),
    },
    {
      field: 'actions',
      headerName: '',
      sortable: false,
      flex: 0.2,
      minWidth: 80,
      renderCell: (params: GridRenderCellParams<NewFinanceType>) => (
        <Box>
          <IconButton
            size="small"
            color="error"
            onClick={() => handleSelectedFinance(params?.row)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <DataGrid
      rows={allFinances}
      columns={columns}
      pageSizeOptions={[5, 10, 15, 25, 50]}
      disableRowSelectionOnClick
      pagination
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      localeText={{
        ...ptBR.components.MuiDataGrid.defaultProps.localeText,
      }}
      sx={SxDataGrid}
    />
  );
};
