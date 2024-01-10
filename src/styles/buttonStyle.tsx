import { theme } from "./theme/theme";

export const buttonSpinnerStyle = {
  background: "#EEE3AC",
  border: "2px solid black",
  display: "inline-block",
  padding: "5px 20px",
  width: "140px",
  borderRadius: "25px",
  fontSize: "0.9rem",
  ":hover": {
    background: "white",
  },
  ":active": {
    background: "white",
  },
  [theme.breakpoints.up("md")]: {
    ":hover": {
      scale: "1.1",
    },
  },
};
export const buttonHomePageStyle = {
  position: "absolute",
  right: 0,
  top: 60,
  rotate: "30deg",
  background: "#EEE3AC",
  border: "2px solid black",
  display: "inline-block",
  padding: "10px 20px",
  borderRadius: "25px",
  fontSize: "1rem",
  ":hover": {
    background: "white",
  },
  ":active": {
    background: "white",
  },
  [theme.breakpoints.up("md")]: {
    right: 40,
    top: 100,
    ":hover": {
      scale: "1.1",
    },
  },
};
