import { Interpolation, Theme } from "@mui/material";
import { useEffect, useState } from "react";
import { useThemeMode } from "@stores/useThemeMode";
import { colors } from "@theme/colors";

export const useGlobalStyles = () => {
  const { themeMode } = useThemeMode();
  const [globalStyles, setGlobalStyles] = useState<Interpolation<Theme>>({});

  useEffect(() => {
    const scrollbar = {
      "::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
        backgroundColor:
          themeMode == "dark" ? colors?.darkMode?.dark : "#e9e9e9",
      },

      "::-webkit-scrollbar-thumb": {
        backgroundColor: colors.primary.main,
        border: `1px solid ${colors.primary.main}`,
      },
    };

    setGlobalStyles({
      body: {
        ...scrollbar,
        backgroundColor:
          themeMode == "dark" ? colors?.darkMode?.dark : "#e9e9e9",
      },
      ...scrollbar,
    });
  }, [themeMode]);

  return { globalStyles };
};
