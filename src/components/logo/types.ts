import type { SxProps, Theme } from "@mui/material";

type ThemeMode = 'light' | 'dark';

export type SxLogoProps = (mode: ThemeMode) => SxProps<Theme>;