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
      main: "#000000",
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
    custom: {
      custom:
        "linear-gradient(rgba(238, 227, 172, 0.9), rgba(238, 227, 172, 0.9))",
      bg: "rgb(238, 227, 172)",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: string;
    link: {
      primary: string;
    };
    custom: {
      custom: string;
      bg: string;
    };
  }
  interface PaletteOptions {
    tertiary?: string;
    link?: {
      primary: string;
    };
    custom: {
      custom: string;
      bg: string;
    };
  }
}
