import { useGetFinanceLeadTimeChartApi } from '@api/get-finance-lead-time-chart';
import { LineChartCustom } from '@components/line-chart-custom';
import { colors } from '@mui/material';
import { NewFinanceType } from '@pages/dashboard/types';
import { colors as colorsCustom } from '@theme/colors';
import React from 'react';

type Props = {
  allFinances: NewFinanceType[];
  selectedMonth?: string;
};

export const ChartLineLeadTime: React.FC<Props> = ({ allFinances, selectedMonth }) => {
  const { chartData } = useGetFinanceLeadTimeChartApi(allFinances, selectedMonth);
  const { xAxis, entradas, saidas } = chartData;

  const seriesBaseConfig = {
    type: 'line' as const,
    labelMarkType: 'square' as const,
    highlightScope: {
      highlight: 'series' as const,
      fade: 'global' as const,
    },
    curve: 'natural' as const,
    connectNulls: true,
    showMark: true,
    area: true,
    disableHighlight: true,
    strictStepCurve: true,
  };

  const series = [
    {
      data: entradas,
      label: 'Entradas',
      color: colorsCustom?.primary?.main
    },
    {
      data: saidas,
      label: 'Saídas',
      color: colors.red['600'],
    },
  ].map((serie) => ({
    ...seriesBaseConfig,
    ...serie,
  }));

  return (
    <LineChartCustom
      xAxis={xAxis}
      series={series}
    />
  );
};
