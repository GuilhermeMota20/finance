import { useGetFinanceBarChartApi } from '@api/get-finance-bar-chart';
import { BarChartCustom } from '@components/bar-chart-custom';
import { colors as colorsCustom } from '@theme/colors';
import { colors } from '@mui/material';

export const ChartBarFinance: React.FC = () => {
  const { chartData } = useGetFinanceBarChartApi();
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
