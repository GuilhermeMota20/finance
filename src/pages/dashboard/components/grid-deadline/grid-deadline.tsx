import { useGetFinancePieChartApi } from "@api/get-finance-pie-chart";
import { CardCustom } from "@components/card-custom";
import { PieChartCustom } from "@components/pie-chart-custom/pie-chart-custom";
import { Grid } from "@mui/material";
import { colors } from "@theme/colors";

export const GridDeadline: React.FC = () => {
  const colorsPallet = [
    colors?.primary?.main,
    colors?.primary?.light,
    colors?.primary?.dark,
  ];

  const { chartData: categorias } = useGetFinancePieChartApi("categoria", colorsPallet);
  const { chartData: tipos } = useGetFinancePieChartApi("tipo", colorsPallet);
  const { chartData: metodos } = useGetFinancePieChartApi("metodoPagamento", colorsPallet);

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
