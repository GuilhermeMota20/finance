import { defaultMessages } from '@configs/constants';
import { ChartsLabelMark, ChartsLegend, ChartsTooltip, ChartsXAxis, ChartsYAxis, LineChart } from '@mui/x-charts';
import { LineChartCustomProps } from './types';

export const LineChartCustom: React.FC<LineChartCustomProps> = ({
  xAxis,
  series,
  height = 300,
}) => {
  return (
    <LineChart
      series={series}
      height={height}
      xAxis={[{ id: 'xAxis', data: xAxis, scaleType: 'point' }]}
      yAxis={[{ id: 'yAxis', scaleType: 'linear', min: 0 }]}
      localeText={{
        noData: defaultMessages?.error404,
      }}
    >
      <ChartsTooltip trigger="item" />
      <ChartsLegend />
      <ChartsXAxis />
      <ChartsYAxis />
      <ChartsLabelMark />

      {/* {referenceLines?.map((ref, index) => (
        <Fragment key={index}>
          <ChartsReferenceLine
            y={ref.y}
            lineStyle={{
              stroke: ref.color,
              strokeWidth: 2,
              strokeDasharray: '4, 4',
            }}
          />
        </Fragment>
      ))} */}
    </LineChart>
  );
};
