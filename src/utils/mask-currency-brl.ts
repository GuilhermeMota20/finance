export const maskCurrencyBRL = (value?: string | number): string => {
  if (value == null || value === '') return 'R$ 0,00';

  const numeric = String(value).replace(/\D/g, '');
  const floatValue = (parseInt(numeric, 10) / 100).toFixed(2);

  return formatCurrencyBRL(floatValue);
};

export const formatCurrencyBRL = (value?: string | number): string => {
  const numberValue = Number(value);
  if (isNaN(numberValue)) return 'R$ 0,00';

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numberValue);
};
