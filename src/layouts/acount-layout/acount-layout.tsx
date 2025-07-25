import { AppBarCustom } from "@components/app-bar-custom"
import { LayoutProps } from "@layouts/dashboard-layout/types"
import { Stack } from "@mui/material"

export const AcountLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100vw", height: "100vh" }}
      >
        <AppBarCustom
          mobileOpen={false}
          drawerWidth={0}
          setMobileOpen={() => { }}
        />

        {children}
      </Stack>
    </>
  )
}