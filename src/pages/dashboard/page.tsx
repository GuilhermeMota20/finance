import { CardCustom } from "@components/card-custom";
import { Grid } from "@mui/material";
import { ActionBar, ChartBarFinance, ChartLineLeadTime, GridDeadline, GridSummary } from "./components";
import { FinanceTable } from "./components/finance-table";

export const MetricasOperacao: React.FC = () => {
  return (
    <>
      <ActionBar />

      <GridSummary />

      <Grid container spacing={2}>
        <Grid size={12}>
          <CardCustom title="Registros detalhados" >
            <FinanceTable />
          </CardCustom>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <CardCustom title="LeadTime (linha do tempo)" >
            <ChartLineLeadTime />
          </CardCustom>
        </Grid>

        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <CardCustom title="Operações financeiras por mês">
            <ChartBarFinance />
          </CardCustom>
        </Grid>

        <GridDeadline />
      </Grid>
    </>
  )
}