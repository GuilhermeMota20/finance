import { CustomDataGrid } from '@components/custom-datagrid';
import { useModalGlobals } from '@hooks/useGlobalModals';
import { Edit } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { NewFinanceType } from '@pages/dashboard/types';
import { formatDateBR } from '@utils/format-date-to-br';
import { getDateValue } from '@utils/get-date-value';
import { maskCurrencyBRL } from '@utils/mask-currency-brl';

type Props = {
  allFinances: NewFinanceType[];
};

export const FinanceTable: React.FC<Props> = ({ allFinances }) => {
  const { onOpenDeleteFinance, onOpenNewFinance, setSelectedFinance } = useModalGlobals();

  const columns: GridColDef<NewFinanceType>[] = [
    { field: 'descricao', headerName: 'Descrição', flex: 1 },
    { field: 'observacoes', headerName: 'Observações', flex: 1 },
    { field: 'categoria', headerName: 'Categoria', flex: 1 },
    { field: 'metodoPagamento', headerName: 'Método de pagamento', flex: 1 },
    { field: 'tipo', headerName: 'Tipo', flex: 1 },
    {
      field: 'valor',
      headerName: 'Valor (R$)',
      type: 'number',
      flex: 1,
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
            onClick={() => {
              onOpenDeleteFinance();
              setSelectedFinance(params?.row);
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            size="small"
            color="secondary"
            onClick={() => {
              onOpenNewFinance();
              setSelectedFinance(params?.row);
            }}
          >
            <Edit />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <>
      <CustomDataGrid rows={allFinances} columns={columns} />
    </>
  );
};
