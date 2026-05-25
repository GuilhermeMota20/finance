import { useGetAllFinanceApi } from "@api/get-all-finance";
import { CardCustom } from "@components/card-custom";
import { Grid } from "@mui/material";
import { filterFinancesByMonth, getFinanceMonthKey, getFinanceMonthLabel } from "@utils/finance-filters";
import { useMemo, useState } from "react";
import { ActionBar, ChartBarFinance, ChartLineLeadTime, GridDeadline, GridSummary } from "./components";
import { FinanceTable } from "./components/finance-table";

export const MetricasOperacao: React.FC = () => {
  const { allFinances } = useGetAllFinanceApi();
  const [selectedMonth, setSelectedMonth] = useState('');

  const availableMonths = useMemo(
    () => allFinances
      .map(({ data }) => getFinanceMonthKey(data))
      .filter((value): value is string => Boolean(value)),
    [allFinances]
  );

  const monthOptions = useMemo(() => (
    Array.from(
      new Set(availableMonths)
    )
      .sort()
      .reverse()
      .map((value) => ({
        value,
        label: getFinanceMonthLabel(value),
      }))
  ), [availableMonths]);

  const filteredFinances = useMemo(
    () => filterFinancesByMonth(allFinances, selectedMonth),
    [allFinances, selectedMonth]
  );

  return (
    <>
      <ActionBar
        monthOptions={monthOptions}
        selectedMonth={selectedMonth}
        onMonthChange={setSelectedMonth}
      />

      <GridSummary allFinances={filteredFinances} />

      <Grid container spacing={2}>
        <Grid size={12}>
          <CardCustom title="Registros detalhados">
            <FinanceTable allFinances={filteredFinances} />
          </CardCustom>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <CardCustom title="LeadTime (linha do tempo)">
            <ChartLineLeadTime allFinances={allFinances} selectedMonth={selectedMonth} />
          </CardCustom>
        </Grid>

        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <CardCustom title="Operações financeiras por mês">
            <ChartBarFinance allFinances={allFinances} selectedMonth={selectedMonth} />
          </CardCustom>
        </Grid>

        <GridDeadline allFinances={allFinances} selectedMonth={selectedMonth} />
      </Grid>
    </>
  );
};
