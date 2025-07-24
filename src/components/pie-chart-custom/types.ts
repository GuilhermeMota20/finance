export type LabelsType = {
  label: string;
  quantity: number;
  percent: number;
};

export type PieChartRawData = {
  labels: LabelsType[];
  total: number;
};

export type PieChartCustomProps = {
  rawData: PieChartRawData;
};