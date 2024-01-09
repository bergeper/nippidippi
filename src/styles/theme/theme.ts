import { createTheme } from "@mui/material/styles";
import { Eczar } from "next/font/google";

const eczar = Eczar({
  weight: ["400", "500", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  typography: {
    fontFamily: [eczar.style.fontFamily].join(","),
  },
  palette: {
    primary: {
      main: "#EEE3AC",
    },
    secondary: {
      main: "#656ACE",
    },
    tertiary: "#ffffff",
    link: {
      primary: "#ffffff",
    },
    grey: {
      200: "#ffffff",
    },
    common: {
      white: "#ffffff",
    },
    error: {
      main: "#ffffff",
    },
    background: {
      default: "#ffffff",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: string;
    link: {
      primary: string;
    };
  }
  interface PaletteOptions {
    tertiary?: string;
    link?: {
      primary: string;
    };
  }
}
