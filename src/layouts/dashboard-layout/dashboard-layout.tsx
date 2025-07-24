import { AppBarCustom } from '@components/app-bar-custom';
import { BackdropCustom } from '@components/backdrop-custom';
import {
  Box,
  CssBaseline,
  Stack,
  Toolbar
} from '@mui/material';
import { ModalProvider } from '@providers/modal-providers';
import { useState } from 'react';
import { SxMain } from './styles';
import { LayoutProps } from './types';

const drawerWidth = 260;

export const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <BackdropCustom />
      <ModalProvider />

      <Box display="flex">
        <CssBaseline />

        <AppBarCustom
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        {/* <DrawerCustom
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        /> */}

        <Box
          component="main"
          sx={SxMain(drawerWidth)}
        >
          <Toolbar />

          <Stack spacing={4} mt={4}>
            {children}
          </Stack>
        </Box>
      </Box>
    </>
  );
}
