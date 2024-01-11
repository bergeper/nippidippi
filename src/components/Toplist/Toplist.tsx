import { Box } from "@mui/material";
import { type IFullCombination } from "~/models/ICombination";
import { ToplistCombo } from "./ToplistCombo";

interface Props {
  combos: IFullCombination[];
}

export const Toplist = ({ combos }: Props) => {
  const sortedCombos = combos.slice().sort((a, b) => b.rating - a.rating);
  return (
    <>
      {sortedCombos.map((c, i) => (
        <Box
          key={i}
          component="article"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "auto",
            width: "100%",
            my: 4,
          }}
        >
          <ToplistCombo combo={c} toplistNum={i + 1} />
        </Box>
      ))}
    </>
  );
};
