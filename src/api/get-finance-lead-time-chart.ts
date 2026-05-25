import { NewFinanceType, leadTimeChartObject } from '@pages/dashboard/types';
import { filterFinancesByMonth, getFinanceMonthKey, parseFinanceValue } from '@utils/finance-filters';
import { parseDateFirestoreToDate } from '@utils/parse-date-firestore-to-date';
import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useMemo } from 'react';

export const useGetFinanceLeadTimeChartApi = (
  allFinances: NewFinanceType[],
  selectedMonth?: string
) => {
  const chartData = useMemo<leadTimeChartObject>(() => {
    const filteredFinances = filterFinancesByMonth(allFinances, selectedMonth);
    const round = (value: number) => Number(value.toFixed(2));

    if (selectedMonth) {
      const [year, month] = selectedMonth.split('-').map(Number);
      const startDate = startOfMonth(new Date(year, month - 1));
      const endDate = endOfMonth(startDate);
      const dailyGroups = new Map<string, { entradas: number; saidas: number }>();

      eachDayOfInterval({ start: startDate, end: endDate }).forEach((date) => {
        dailyGroups.set(format(date, 'yyyy-MM-dd'), { entradas: 0, saidas: 0 });
      });

      filteredFinances.forEach((finance) => {
        const date = parseDateFirestoreToDate(finance.data);
        if (!date) return;

        const dayKey = format(date, 'yyyy-MM-dd');
        const group = dailyGroups.get(dayKey);
        if (!group) return;

        const numericValue = parseFinanceValue(finance.valor);

        if (finance.tipo === 'ENTRADA') {
          group.entradas += numericValue;
          return;
        }

        group.saidas += numericValue;
      });

      const sortedDays = Array.from(dailyGroups.keys()).sort();

      return {
        xAxis: sortedDays.map((key) => format(new Date(key), 'dd/MM', { locale: ptBR })),
        entradas: sortedDays.map((key) => round(dailyGroups.get(key)!.entradas)),
        saidas: sortedDays.map((key) => round(dailyGroups.get(key)!.saidas)),
      };
    }

    const monthlyGroups = new Map<string, { entradas: number; saidas: number }>();

    filteredFinances.forEach((finance) => {
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

    return {
      xAxis: sortedMonths.map((key) => {
        const [year, month] = key.split('-').map(Number);
        return format(new Date(year, month - 1), 'MMM/yy', { locale: ptBR });
      }),
      entradas: sortedMonths.map((key) => round(monthlyGroups.get(key)!.entradas)),
      saidas: sortedMonths.map((key) => round(monthlyGroups.get(key)!.saidas)),
    };
  }, [allFinances, selectedMonth]);

  return { chartData };
};
