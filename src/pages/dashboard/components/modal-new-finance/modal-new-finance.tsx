import { useCreateFinanceApi } from "@api/create-finance";
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
import { useSnackbar } from 'notistack';
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export const ModalNewFinance: React.FC = () => {
  const { isOpenNewFinance, onCloseNewFinance } = useModalGlobals();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();
  const { createFinance } = useCreateFinanceApi();

  const methods = useForm<NewFinanceType>({
    resolver: yupResolver(newFinanceSchema),
    defaultValues: {
      tipo: "SAIDA",
      data: new Date(),
      categoria: "OUTROS",
      metodoPagamento: "PIX",
    },
  });

  const handleOnCloseNewFinance = () => {
    methods?.reset();
    onCloseNewFinance();
  };

  const handleCreateFinance: SubmitHandler<NewFinanceType> = async (formData) => {
    const response = await createFinance(user?.uid!, formData);

    if (response?.success) {
      enqueueSnackbar("Registro criado com sucesso!", { variant: 'success' });
      handleOnCloseNewFinance();
    } else {
      enqueueSnackbar(response?.error, { variant: 'error' });
    }
  };

  const actionsModal = (
    <>
      <Button onClick={handleOnCloseNewFinance}>Cancelar</Button>
      <Button type="submit" variant="contained" color="primary">
        Registrar
      </Button>
    </>
  );

  return (
    <>
      {isOpenNewFinance && (
        <FormProvider {...methods}>
          <ModalCustom
            title="NOVO REGISTRO FINANCEIRO"
            isForm={true}
            isOpen={isOpenNewFinance}
            onClose={handleOnCloseNewFinance}
            onSubmit={methods.handleSubmit(handleCreateFinance)}
            actions={actionsModal}
          >
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