import { create } from "zustand";

type ThemeMode = "light" | "dark";

type ThemeState = {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  changeTheme: (value: ThemeMode) => void;
};

const localStorageKey = "themeMode";

const getStorageTheme = (): ThemeMode | null => {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(localStorageKey);
  return stored === "light" || stored === "dark" ? stored : null;
};

const useThemeStore = create<ThemeState>((set) => ({
  themeMode: getStorageTheme() ?? "light",

  toggleTheme: () =>
    set((state) => {
      const newMode = state.themeMode === "light" ? "dark" : "light";
      localStorage.setItem(localStorageKey, newMode);
      return { themeMode: newMode };
    }),

  changeTheme: (value) => {
    localStorage.setItem(localStorageKey, value);
    return set(() => ({ themeMode: value }));
  },
}));

export const useThemeMode = () => {
  const themeMode = useThemeStore((state) => state.themeMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const changeTheme = useThemeStore((state) => state.changeTheme);

  return { themeMode, toggleTheme, changeTheme };
};
