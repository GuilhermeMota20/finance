import { Box, Drawer } from "@mui/material";
import { DrawerNav } from "./drawer-nav";
import { SxBoxNav, SxDrawerDesktop, SxDrawerMobile } from "./styles";
import type { DrawerCustomProps } from "./types";

export const DrawerCustom: React.FC<DrawerCustomProps> = ({
  drawerWidth,
  mobileOpen,
  setMobileOpen,
}) => {
  return (
    <>
      <Box
        component="nav"
        aria-label="sidebar"
        sx={SxBoxNav(drawerWidth)}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={SxDrawerMobile(drawerWidth)}
        >
          <DrawerNav setMobileOpen={setMobileOpen} />
        </Drawer>

        <Drawer
          open
          variant="permanent"
          sx={SxDrawerDesktop(drawerWidth)}
        >
          <DrawerNav />
        </Drawer>
      </Box>
    </>
  )
}