import { useCreateFinanceApi } from "@api/create-finance";
import { useUpdateFinanceApi } from "@api/update-finance";
import { Input, SelectBox } from "@components/form";
import { InputDate } from "@components/form/input-date";
import { ModalCustom } from "@components/modal-custom";
import { useAuth } from "@context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useModalGlobals } from "@hooks/useGlobalModals";
import { Button, MenuItem } from "@mui/material";
import { NewFinanceType } from "@pages/dashboard/types";
import { newFinanceSchema } from "@pages/dashboard/validation";
import { maskCurrencyBRL } from "@utils/mask-currency-brl";
import { parseDateFirestoreToDate } from "@utils/parse-date-firestore-to-date";
import { setFormValues } from "@utils/set-form-values";
import { useSnackbar } from 'notistack';
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export const ModalNewFinance: React.FC = () => {
  const { isOpenNewFinance, onCloseNewFinance, selectedFinance, setSelectedFinance } = useModalGlobals();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();
  const { createFinance } = useCreateFinanceApi();
  const { updateFinance } = useUpdateFinanceApi();

  const isEdit = !!selectedFinance;

  const methods = useForm<NewFinanceType>({
    resolver: yupResolver(newFinanceSchema as any),
    defaultValues: {
      tipo: "SAIDA",
      categoria: "OUTROS",
      metodoPagamento: "PIX",
      data: new Date(),
    },
  });

  const handleOnCloseNewFinance = () => {
    methods?.reset();
    onCloseNewFinance();
    setSelectedFinance(undefined);
  };

  const handleCreateFinance: SubmitHandler<NewFinanceType> = async (formData) => {
    const response = await createFinance(user?.uid!, formData);

    if (response?.success) {
      enqueueSnackbar("Registro criado com sucesso!", { variant: 'success' });
      handleOnCloseNewFinance();
    } else {
      enqueueSnackbar(response?.error, { variant: 'error' });
    };
  };

  const handleUpdateFinance: SubmitHandler<NewFinanceType> = async (formData) => {
    const response = await updateFinance(selectedFinance?.id!, user?.uid!, formData);

    if (response?.success) {
      enqueueSnackbar("Registro editado com sucesso!", { variant: 'success' });
      handleOnCloseNewFinance();
    } else {
      enqueueSnackbar(response?.error, { variant: 'error' });
    };
  };

  const actionsModal = (
    <>
      <Button onClick={handleOnCloseNewFinance}>Cancelar</Button>
      <Button type="submit" variant="contained" color="primary">
        {`${isEdit ? 'Editar' : 'Registrar'}`}
      </Button>
    </>
  );

  useEffect(() => {
    if (isEdit && selectedFinance) {
      setFormValues(methods, {
        ...selectedFinance,
        data: new Date(parseDateFirestoreToDate(selectedFinance.data)!)
      });
    };

    console.log('selectedFinance', selectedFinance);
  }, [selectedFinance]);

  return (
    <>
      {isOpenNewFinance && (
        <FormProvider {...methods}>
          <ModalCustom
            title={`${isEdit ? 'EDITAR REGISTRO' : 'NOVO REGISTRO FINANCEIRO'}`}
            isForm={true}
            isOpen={isOpenNewFinance}
            onClose={handleOnCloseNewFinance}
            onSubmit={methods.handleSubmit(isEdit ? handleUpdateFinance : handleCreateFinance)}
            actions={actionsModal}
          >
            <input hidden {...methods.register('id')} />

            <SelectBox
              col={12}
              name="metodoPagamento"
              label="Método de pagamentos*"
              control={methods?.control}
            >
              <MenuItem value="" disabled>Selecione</MenuItem>
              <MenuItem value="PIX">PIX</MenuItem>
              <MenuItem value="CREDITO">Cartão de crédito</MenuItem>
              <MenuItem value="DEBITO">Cartão de débito</MenuItem>
              <MenuItem value="DINHEIRO">Dinheiro em espécie</MenuItem>
            </SelectBox>

            <SelectBox
              col={12}
              name="tipo"
              label="Tipo*"
              control={methods?.control}
            >
              <MenuItem value="" disabled>Selecione</MenuItem>
              <MenuItem value="ENTRADA">Entrada</MenuItem>
              <MenuItem value="SAIDA">Saída</MenuItem>
            </SelectBox>

            <SelectBox
              col={12}
              name="categoria"
              label="Categoria*"
              control={methods?.control}
            >
              <MenuItem value="" disabled>Selecione</MenuItem>
              <MenuItem value="ALIMENTACAO">Alimentação</MenuItem>
              <MenuItem value="LAZER">Lazer</MenuItem>
              <MenuItem value="LOCOMOCAO">Locomoção</MenuItem>
              <MenuItem value="CASA">Casa</MenuItem>
              <MenuItem value="OUTROS">Outros</MenuItem>
            </SelectBox>

            <Input
              col={12}
              name="descricao"
              label="Descrição*"
              control={methods?.control}
            />

            <Input
              col={12}
              name="valor"
              label="Valor*"
              placeholder="R$ 0,00"
              control={methods?.control}
              mask={maskCurrencyBRL}
              maskBlur={maskCurrencyBRL}
            />

            <InputDate
              col={12}
              name="data"
              label="Data do Registro*"
              control={methods?.control}
            />

            <Input
              col={12}
              name="observacoes"
              label="Observações"
              placeholder="Ex: Pagamento realizado, pendente, etc."
              control={methods?.control}
            />
          </ModalCustom>
        </FormProvider>
      )}
    </>
  );
}