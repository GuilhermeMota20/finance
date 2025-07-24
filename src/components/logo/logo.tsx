import { Box, Stack, Typography } from "@mui/material";
import { useThemeMode } from "@stores/useThemeMode";
import { SxLogo } from "./styles";
import logo from '@assets/logo-finance.svg';

export const Logo: React.FC = () => {
  const { themeMode } = useThemeMode();

  return (
    <>
      <Stack spacing={2} flexDirection='row' alignItems='center' justifyContent='center'>
        <Box
          component='img'
          src={logo}
        />
        <Typography sx={SxLogo(themeMode)}>
          FINANCE
        </Typography>
      </Stack>
    </>
  )
}