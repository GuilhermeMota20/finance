import { NewFinanceType } from '@pages/dashboard/types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { parseDateFirestoreToDate } from './parse-date-firestore-to-date';

export const parseFinanceValue = (value: string | number) => {
  if (typeof value === 'number') return value;
  if (!value) return 0;

  const normalized = value
    .replace(/\s/g, '')
    .replace('R$', '')
    .replace(/\./g, '')
    .replace(',', '.');

  return parseFloat(normalized) || 0;
};

export const getFinanceMonthKey = (value?: unknown) => {
  const date = parseDateFirestoreToDate(value);
  return date ? format(date, 'yyyy-MM') : null;
};

export const getFinanceMonthLabel = (monthKey: string) => {
  const [year, month] = monthKey.split('-').map(Number);
  return format(new Date(year, month - 1), 'MMMM/yyyy', { locale: ptBR });
};

export const filterFinancesByMonth = (
  allFinances: NewFinanceType[],
  selectedMonth?: string
) => {
  if (!selectedMonth) return allFinances;

  return allFinances.filter(
    ({ data }) => getFinanceMonthKey(data) === selectedMonth
  );
};
