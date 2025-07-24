import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useThemeMode } from "@stores/useThemeMode";

export const ButtonToggleTheme: React.FC = () => {
  const { themeMode, toggleTheme } = useThemeMode();

  return (
    <>
      <IconButton onClick={() => toggleTheme()}>
        {themeMode === 'dark' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </>
  )
}