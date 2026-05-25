import { useGetFinancePieChartApi } from "@api/get-finance-pie-chart";
import { CardCustom } from "@components/card-custom";
import { PieChartCustom } from "@components/pie-chart-custom/pie-chart-custom";
import { Grid } from "@mui/material";
import { NewFinanceType } from "@pages/dashboard/types";
import { colors } from "@theme/colors";

type Props = {
  allFinances: NewFinanceType[];
  selectedMonth?: string;
};

export const GridDeadline: React.FC<Props> = ({ allFinances, selectedMonth }) => {
  const colorsPallet = [
    colors?.primary?.main,
    colors?.primary?.light,
    colors?.primary?.dark,
  ];

  const { chartData: categorias } = useGetFinancePieChartApi(allFinances, "categoria", selectedMonth, colorsPallet);
  const { chartData: tipos } = useGetFinancePieChartApi(allFinances, "tipo", selectedMonth, colorsPallet);
  const { chartData: metodos } = useGetFinancePieChartApi(allFinances, "metodoPagamento", selectedMonth, colorsPallet);

  return (
    <>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <CardCustom title="Métricas: por categorias">
          <PieChartCustom rawData={categorias} />
        </CardCustom>
      </Grid>

      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <CardCustom title="Métricas: por tipo (Entradas vs Saídas)">
          <PieChartCustom rawData={tipos} />
        </CardCustom>
      </Grid>

      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <CardCustom title="Métricas: por métodos de pagamento">
          <PieChartCustom rawData={metodos} />
        </CardCustom>
      </Grid>
    </>
  );
};
