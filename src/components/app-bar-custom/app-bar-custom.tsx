import { Logo } from "@components/logo";
import { useAuth } from "@context/AuthContext";
import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import { ButtonRefresh } from "../button-refresh/button-refresh";
import { ButtonToggleTheme } from "../button-toggle-theme";
import { ButtonUser } from "../button-user";
import { SxAppBarCustom } from "./styles";
import type { AppBarCustomProps } from "./types";

export const AppBarCustom: React.FC<AppBarCustomProps> = () => {
  const { isAuth, user } = useAuth();
  const theme = useTheme();

  return (
    <>
      {isAuth || user ? (
        <>
          <AppBar
            position="fixed"
            elevation={0}
            color="transparent"
            sx={SxAppBarCustom(0, theme)}
          >
            <Toolbar>
              {/* <IconButton
                color="inherit"
                edge="start"
                onClick={() => setMobileOpen(!mobileOpen)}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <Menu />
              </IconButton> */}
              <Logo />

              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="end"
                gap={2}
              >
                <ButtonRefresh />
                <ButtonToggleTheme />
                <ButtonUser data={user} />
              </Box>
            </Toolbar>
          </AppBar>
        </>
      ) : (
        <>
          <AppBar
            position="fixed"
            color="transparent"
            sx={SxAppBarCustom(0, theme)}          >
            <Toolbar >
              <Logo />

              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="end"
                gap={2}
              >
                <ButtonRefresh />
                <ButtonToggleTheme />
              </Box>
            </Toolbar>
          </AppBar>
        </>
      )}

    </>
  )
}