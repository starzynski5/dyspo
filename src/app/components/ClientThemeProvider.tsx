'use client';

import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../scripts/theme";

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}