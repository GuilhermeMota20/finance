import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { useThemeMode } from "@stores/useThemeMode";
import { themeDark } from "./themeDark";
import { themeLight } from "./themeLight";

type Props = {
  children: ReactNode | ReactNode[];
};

export const ProviderTheme = ({ children }: Props) => {
  const { themeMode } = useThemeMode();

  return (
    <>
      <ThemeProvider theme={themeMode == "dark" ? themeDark() : themeLight()}>
        {children}
      </ThemeProvider>
    </>
  );
};
