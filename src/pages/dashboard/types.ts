import * as yup from "yup";
import { newFinanceSchema } from "./validation";

export type leadTimeChartObject = {
  xAxis: string[];
  entradas: number[];
  saidas: number[];
};

export type financeBarChartObject = {
  xAxis: string[];
  entradas: number[];
  saidas: number[];
  saldo: number[];
};

export type FinanceMonthOption = {
  label: string;
  value: string;
};

export type NewFinanceType = yup.InferType<typeof newFinanceSchema>;

export type FieldTipoType = "ENTRADA" | "SAIDA";
export type FieldCategoriaType = "ALIMENTACAO" | "LAZER" | "LOCOMOCAO" | "CASA" | "OUTROS";
export type FieldMetodoPagamentoType = "PIX" | "CREDITO" | "DEBITO" | "DINHEIRO";
