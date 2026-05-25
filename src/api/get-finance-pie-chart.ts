import { LabelsType, PieChartRawData } from '@components/pie-chart-custom/types';
import { NewFinanceType } from '@pages/dashboard/types';
import { filterFinancesByMonth, parseFinanceValue } from '@utils/finance-filters';
import { useMemo } from 'react';

type GroupByType = 'categoria' | 'tipo' | 'metodoPagamento';

export const useGetFinancePieChartApi = (
  allFinances: NewFinanceType[],
  groupBy: GroupByType,
  selectedMonth?: string,
  colorsValues: string[] = []
) => {
  const chartData = useMemo<PieChartRawData>(() => {
    const groupCount = new Map<string, number>();
    let total = 0;

    filterFinancesByMonth(allFinances, selectedMonth).forEach((data) => {
      const groupKey = (data[groupBy] as string) || 'OUTROS';
      const value = parseFinanceValue(data.valor);

      total += value;
      groupCount.set(groupKey, (groupCount.get(groupKey) || 0) + value);
    });

    const labels: LabelsType[] = Array.from(groupCount.entries()).map(
      ([label, quantity], index) => ({
        label,
        quantity,
        percent: total > 0 ? (quantity / total) * 100 : 0,
        color: colorsValues.length
          ? colorsValues[index % colorsValues.length]
          : undefined,
      })
    );

    return { labels, total };
  }, [allFinances, colorsValues, groupBy, selectedMonth]);

  return { chartData };
};
