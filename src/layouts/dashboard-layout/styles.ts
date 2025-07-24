import type { SxMainProps } from "./types";

export const SxMain: SxMainProps = (drawerWidth) => ({
  p: 3,
  flexGrow: 1,
  width: { sm: `calc(100% - ${drawerWidth}px)` }
})