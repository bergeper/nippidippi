"use client";

import { Box } from "@mui/material";
import { type IFullCombination } from "~/models/ICombination";
import { ToplistCombo } from "./ToplistCombo";
import { theme } from "~/styles/theme/theme";

interface Props {
  combos: IFullCombination[];
}

export const Toplist = ({ combos }: Props) => {
  const sortedCombos = combos.slice().sort((a, b) => b.rating - a.rating);
  return (
    <Box
      component="section"
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
          justifyContent: "center",
          width: "100%",
        },
        [theme.breakpoints.up("lg")]: {
          width: "100%",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "1000px",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "&::-webkit-scrollbar": {
            display: "none",
            height: "6px",
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#000000",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#eee3ac",
            borderRadius: "4px",
          },
          scrollbarWidth: "2px",
          scrollbarColor: "#000000 #eee3ac",
          [theme.breakpoints.up("sm")]: {
            width: "auto",
            "&::-webkit-scrollbar": {
              display: "block",
            },
          },
        }}
      >
        {sortedCombos.map((c, i) => (
          <Box
            key={i}
            component="article"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "auto",
              width: "100%",
              my: 4,
              background: theme.palette.custom.custom,
              [theme.breakpoints.up("sm")]: {
                width: "390px",
                height: "450px",
              },
              [theme.breakpoints.up("md")]: {
                width: "490px",
                height: "550px",
                m: 5,
              },
            }}
          >
            <ToplistCombo combo={c} toplistNum={i + 1} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
