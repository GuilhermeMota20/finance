import { CardCustom } from '@components/card-custom';
import { useAuth } from '@context/AuthContext';
import GoogleIcon from '@mui/icons-material/Google';
import {
  Alert,
  Button,
  Grid,
  Stack
} from "@mui/material";

export const Login = () => {
  const { loading, SignInWithGoogle, loginError } = useAuth();

  return (
    <>
      <Stack alignItems={"center"}>
        <CardCustom title='Login' expanded={false}>
          <Grid container spacing={2} >
            <>
              {loginError ? (
                <Grid size={{ xs: 12 }}>
                  <Alert severity="error">Usuário ou senha inválidos</Alert>
                </Grid>
              ) : null}
            </>

            <Grid size={{ xs: 12 }}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<GoogleIcon />}
                onClick={SignInWithGoogle}
                loading={loading}
                disabled={loading}
              >
                {loading ? "Carregando..." : "Entrar com Google"}
              </Button>
            </Grid>
          </Grid>
        </CardCustom>
      </Stack>
    </>
  );
};
