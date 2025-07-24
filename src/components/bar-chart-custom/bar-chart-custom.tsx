import { BarChart } from '@mui/x-charts';
import { BarLabel } from './bar-label';
import { BarChartCustomProps } from './types';
import { defaultMessages } from '@configs/constants';

export const BarChartCustom: React.FC<BarChartCustomProps> = ({
  xAxis,
  series,
  height = 300,
}) => {
  return (
    <BarChart
      xAxis={[
        {
          data: xAxis,
          barGapRatio: 0.1,
          scaleType: 'band',
        },
      ]}
      series={series ?? []}
      barLabel="value"
      slots={{ barLabel: BarLabel }}
      borderRadius={4}
      height={height}
      localeText={{
        noData: defaultMessages?.error404,
      }}
    />
  );
};
