import { Box, Typography } from "@mui/material";
import { TopList } from "~/components/Toplist/TopList";
import { trpcApi } from "~/server/trpc/proxyTRPC";

export default async function ToplistPage() {
  const combos = await trpcApi.combination.getTopCombos.query();
  return (
    <Box>
      <Typography variant="h4">Nilpa TopList</Typography>
      {combos.map((c, i) => (
        <Box key={i} sx={{ backgroundColor: "whitesmoke", p: 2, m: 2 }}>
          <TopList combo={c} />
        </Box>
      ))}
    </Box>
  );
}
