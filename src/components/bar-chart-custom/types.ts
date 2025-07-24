import { BarSeriesType } from "@mui/x-charts";

export type BarChartCustomProps = {
  xAxis: string[];
  series: BarSeriesType[];
  height?: number;
};