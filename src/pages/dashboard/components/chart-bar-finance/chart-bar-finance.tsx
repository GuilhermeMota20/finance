import { useGetFinanceBarChartApi } from '@api/get-finance-bar-chart';
import { BarChartCustom } from '@components/bar-chart-custom';
import { colors } from '@mui/material';
import { NewFinanceType } from '@pages/dashboard/types';
import { colors as colorsCustom } from '@theme/colors';

type Props = {
  allFinances: NewFinanceType[];
  selectedMonth?: string;
};

export const ChartBarFinance: React.FC<Props> = ({ allFinances, selectedMonth }) => {
  const { chartData } = useGetFinanceBarChartApi(allFinances, selectedMonth);
  const { xAxis, entradas, saidas, saldo } = chartData;

  const seriesBaseConfig = {
    type: 'bar' as const,
    labelMarkType: 'square' as const,
    highlightScope: {
      highlight: 'series' as const,
      fade: 'global' as const,
    },
  };

  const series = [
    {
      label: 'Entradas',
      data: entradas,
      color: colorsCustom?.primary?.main
    },
    {
      label: 'Saídas',
      data: saidas,
      color: colors?.red['700'],
    },
    {
      label: 'Saldo',
      data: saldo,
      color: colors?.cyan['700'],
    },
  ].map((serie) => ({
    ...seriesBaseConfig,
    ...serie,
  }));

  return (
    <BarChartCustom
      xAxis={xAxis}
      series={series}
    />
  );
};
