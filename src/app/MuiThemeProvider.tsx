"use client";
import { type PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "~/styles/theme/theme";
export default function MuiThemeProvider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
