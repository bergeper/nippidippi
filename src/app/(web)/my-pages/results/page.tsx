import { Box } from "@mui/material";
import { trpcApi } from "~/server/trpc/proxyTRPC";

export default async function ResultsPage() {
  const combos = await trpcApi.combination.getTestedCombinations.query();
  // Get all
  console.log(combos);

  return (
    <>
      <Box>
        {combos.map((c) => (
          <p>{c.combination.name}</p>
        ))}
      </Box>
    </>
  );
}
