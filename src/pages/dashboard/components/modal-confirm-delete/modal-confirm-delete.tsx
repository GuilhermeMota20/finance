import { useDeleteFinanceApi } from "@api/delete-finance";
import { ModalCustom } from "@components/modal-custom";
import { useModalGlobals } from "@hooks/useGlobalModals";
import { Button } from "@mui/material";
import { enqueueSnackbar } from "notistack";

export const ModalConfirmDelete: React.FC = () => {
  const { isOpenDeleteFinance, onCloseDeleteFinance, selectedFinance, setSelectedFinance } = useModalGlobals();
  const { deleteFinance } = useDeleteFinanceApi();

  const handleDelete = async () => {
    const response = await deleteFinance(selectedFinance?.id?.toString() ?? "");

    if (response?.success) {
      onCloseDeleteFinance();
      setSelectedFinance(undefined);
      enqueueSnackbar("Registro excluído com sucesso!", { variant: 'success' });
    } else {
      enqueueSnackbar(response?.error, { variant: 'error' });
    };
  };

  const actionsModal = (
    <>
      <Button onClick={onCloseDeleteFinance} variant="contained" color="secondary">Cancelar</Button>
      <Button onClick={handleDelete} variant="contained" color="error">
        Confirmar
      </Button>
    </>
  );

  return (
    <>
      {isOpenDeleteFinance && (
        <ModalCustom
          title="DESEJA MESMO EXCLUIR ESTE REGISTRO?"
          description="Essa ação não poderá ser desfeita."
          isOpen={isOpenDeleteFinance}
          onClose={onCloseDeleteFinance}
          actions={actionsModal}
          fullScreen={false}
        />
      )}
    </>
  );
}