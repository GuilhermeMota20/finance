import type { SxDrawerProps } from "./types";

export const SxBoxNav: SxDrawerProps = (drawerWidth) => ({
  width: { md: drawerWidth },
  flexShrink: { sm: 0 },
});

export const SxDrawerMobile: SxDrawerProps = (drawerWidth) => ({
  display: { xs: 'block', md: 'none' },
  '& .MuiDrawer-paper': {
    width: drawerWidth,
  },
});

export const SxDrawerDesktop: SxDrawerProps = (drawerWidth) => ({
  display: { xs: 'none', md: 'block' },
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});