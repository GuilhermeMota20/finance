import { UseFormReturn, Path, FieldValues } from "react-hook-form";

/**
 * Seta múltiplos valores no formulário de forma genérica e segura.
 *
 * @param methods - Instância do useForm
 * @param values - Objeto parcial com os valores a serem preenchidos
 */
export const setFormValues = <TFieldValues extends FieldValues>(
  methods: UseFormReturn<TFieldValues>,
  values: Partial<TFieldValues>
) => {
  (Object.keys(values) as (keyof TFieldValues)[]).forEach((key) => {
    const value = values[key];
    methods.setValue(
      key as Path<TFieldValues>,
      value as TFieldValues[typeof key]
    );
  });
};
