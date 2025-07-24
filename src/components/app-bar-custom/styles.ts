import type { SxAppBarCustomProps } from "./types";

export const SxAppBarCustom: SxAppBarCustomProps = (drawerWidth, theme) => ({
  width: { md: `calc(100% - ${drawerWidth}px)` },
  ml: { sm: `${drawerWidth}px` },
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  borderBottom: `1px solid ${theme?.palette?.divider}`,
});
