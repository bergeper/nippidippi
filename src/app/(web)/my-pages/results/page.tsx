import { Box } from "@mui/material";
import { CombinationList } from "~/components/Combination/CombinationList";
import { trpcApi } from "~/server/trpc/proxyTRPC";

export default async function ResultsPage() {
  const combos = await trpcApi.combination.getTestedCombinations.query();
  // Get all
  console.log(combos);

  return (
    <>
      {combos.map((c, i) => (
        <Box key={i} sx={{ backgroundColor: "whitesmoke", p: 2, m: 2 }}>
          <CombinationList combo={c.combination} />
        </Box>
      ))}
    </>
  );
}
