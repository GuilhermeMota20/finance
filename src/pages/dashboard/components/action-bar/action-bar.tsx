import { AnimationIn } from "@components/animation-in";
import { useModalGlobals } from "@hooks/useGlobalModals";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { Button, Grid } from "@mui/material";

export const ActionBar: React.FC = () => {
  const { onOpenNewFinance } = useModalGlobals();

  return (
    <>
      <Grid container spacing={2}>
        <AnimationIn>
          <Grid size={{ md: 4 }}>
            <Button
              variant="contained"
              startIcon={<AccountBalanceWalletOutlinedIcon />}
              onClick={onOpenNewFinance}
            >
              Adicionar registro financeiro
            </Button>
          </Grid>
        </AnimationIn>
      </Grid>
    </>
  );
};
