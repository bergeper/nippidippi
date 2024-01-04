import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  typography: {
    fontFamily: [roboto.style.fontFamily].join(","),
  },
  palette: {
    primary: {
      main: "#656ACE",
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
