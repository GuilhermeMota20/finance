import * as yup from "yup";
import { FieldCategoriaType, FieldMetodoPagamentoType, FieldTipoType } from "./types";

export const newFinanceSchema = yup.object({
  // id: yup.mixed().optional().notRequired().default(undefined),
  descricao: yup.string().required("Descrição é obrigatória"),
  tipo: yup.mixed<FieldTipoType>()
    .required("Tipo é obrigatório"),
  valor: yup.string().required("Valor é obrigatório"),
  data: yup.date().required("Data é obrigatória"),
  categoria: yup
    .mixed<FieldCategoriaType>()
    .required("Categoria é obrigatório"),
  metodoPagamento: yup
    .mixed<FieldMetodoPagamentoType>()
    .required("Método de pagamento é obrigatório"),
  observacoes: yup.string().default(""),
});
