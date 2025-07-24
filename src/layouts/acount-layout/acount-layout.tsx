import { AppBarCustom } from "@components/app-bar-custom"
import { BackdropCustom } from "@components/backdrop-custom"
import { LayoutProps } from "@layouts/dashboard-layout/types"
import { Stack } from "@mui/material"

export const AcountLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <BackdropCustom />

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