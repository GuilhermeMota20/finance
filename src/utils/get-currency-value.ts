/**
 * Converte string de moeda (ex: "R$ 1.234,56") para número (ex: 1234.56)
 */
export const getCurrencyValue = (value: string | number): number => {
  if (typeof value === 'number') return value;
  if (!value) return 0;

  return parseFloat(value.replace(/[^\d,.-]/g, '').replace(',', '.')) || 0;
};
