import { LineSeriesType } from "@mui/x-charts";

export type LineChartCustomProps = {
  xAxis: string[];
  series: LineSeriesType[];
  height?: number;
};