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
      cy-test-id="toplist-container"
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "80%",
        },
        [theme.breakpoints.up("md")]: {
          width: "80%",
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
              height: "390px",
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
  );
};
