import { financeBarChartObject, NewFinanceType } from '@pages/dashboard/types';
import { filterFinancesByMonth, getFinanceMonthKey, parseFinanceValue } from '@utils/finance-filters';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useMemo } from 'react';

export const useGetFinanceBarChartApi = (
  allFinances: NewFinanceType[],
  selectedMonth?: string
) => {
  const chartData = useMemo<financeBarChartObject>(() => {
    const monthlyGroups = new Map<string, { entradas: number; saidas: number }>();

    filterFinancesByMonth(allFinances, selectedMonth).forEach((finance) => {
      const monthKey = getFinanceMonthKey(finance.data);
      if (!monthKey) return;

      if (!monthlyGroups.has(monthKey)) {
        monthlyGroups.set(monthKey, { entradas: 0, saidas: 0 });
      }

      const group = monthlyGroups.get(monthKey)!;
      const numericValue = parseFinanceValue(finance.valor);

      if (finance.tipo === 'ENTRADA') {
        group.entradas += numericValue;
        return;
      }

      group.saidas += numericValue;
    });

    const sortedMonths = Array.from(monthlyGroups.keys()).sort();
    const round = (value: number) => Number(value.toFixed(2));

    return {
      xAxis: sortedMonths.map((key) => {
        const [year, month] = key.split('-').map(Number);
        return format(new Date(year, month - 1), 'MMM/yy', { locale: ptBR });
      }),
      entradas: sortedMonths.map((key) => round(monthlyGroups.get(key)!.entradas)),
      saidas: sortedMonths.map((key) => round(monthlyGroups.get(key)!.saidas)),
      saldo: sortedMonths.map((key) => {
        const { entradas, saidas } = monthlyGroups.get(key)!;
        return round(entradas - saidas);
      }),
    };
  }, [allFinances, selectedMonth]);

  return { chartData };
};
