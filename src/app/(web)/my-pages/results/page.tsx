import { Box, Typography } from "@mui/material";
import { trpcCaller } from "~/server/trpc/serverTRPC";

export default async function ResultsPage() {
  const combos = await trpcCaller.combination.getTestedCombinations();
  // Get all
  console.log(combos);

  return (
    <>
      <Box>
        {combos.map((c) => (
          <Typography>{c.combination.name}</Typography>
        ))}
      </Box>
    </>
  );
}
