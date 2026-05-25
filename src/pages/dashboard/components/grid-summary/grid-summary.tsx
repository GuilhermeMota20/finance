import { useFinanceSummary } from "@api/finance-summary";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MoneyOffCsredOutlinedIcon from '@mui/icons-material/MoneyOffCsredOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import { Grid } from "@mui/material";
import { NewFinanceType } from "@pages/dashboard/types";
import { formatPercent } from "@utils/format-percent";
import { formatCurrencyBRL } from "@utils/mask-currency-brl";
import { InfoCard } from "../../../../components/info-card";

type Props = {
  allFinances: NewFinanceType[];
};

export const GridSummary: React.FC<Props> = ({ allFinances }) => {
  const { summary } = useFinanceSummary({ allFinances });

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }}>
          <InfoCard
            title="Entradas"
            value={formatCurrencyBRL(summary?.entradas) ?? 0}
            type="ENTRADA"
            icon={<AttachMoneyOutlinedIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <InfoCard
            title="Saídas"
            value={formatCurrencyBRL(summary?.saidas) ?? 0}
            type="SAIDA"
            icon={<MoneyOffCsredOutlinedIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <InfoCard
            title="Total"
            value={formatCurrencyBRL(summary?.total) ?? 0}
            type="TOTAL"
            icon={<MonetizationOnOutlinedIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <InfoCard
            title="Percentual"
            value={formatPercent(summary?.percentual) ?? 0}
            icon={<PercentOutlinedIcon />}
          />
        </Grid>
      </Grid>
    </>
  );
};
