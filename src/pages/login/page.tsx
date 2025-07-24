import { useAuth } from '@context/AuthContext';
import GoogleIcon from '@mui/icons-material/Google';
import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import { useBackdropLoading } from "@stores/backdrop-loading";
import { useEffect } from "react";

export const Login = () => {
  const { loading, SignInWithGoogle, loginError } = useAuth();
  const { setOpenStates } = useBackdropLoading((state) => state);

  useEffect(() => {
    setOpenStates([loading]);
  }, [loading]);

  return (
    <>
      <Stack alignItems={"center"}>
        <Card sx={{ width: "90%", maxWidth: "500px" }}>
          <CardContent>
            <Grid container spacing={2} >
              <>
                {loginError ? (
                  <Grid size={{ xs: 12 }}>
                    <Alert severity="error">Usuário ou senha inválidos</Alert>
                  </Grid>
                ) : null}
              </>

              <Grid size={{ xs: 12 }}>
                <Typography variant={"h5"}>Login</Typography>
              </Grid>

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
          </CardContent>
        </Card>
      </Stack>
    </>
  );
};
