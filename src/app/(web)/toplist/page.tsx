import { Box, Typography } from "@mui/material";
import { TopList } from "~/components/Toplist/TopList";
import { trpcCaller } from "~/server/trpc/serverTRPC";

export default async function ToplistPage() {
  const combos = await trpcCaller.combination.getTopCombos();
  if (combos) {
    const sortedCombos = combos.slice().sort((a, b) => b.rating - a.rating);
    return (
      <Box component="section">
        <Typography variant="h4">Nilpa TopList</Typography>
        {sortedCombos.map((c, i) => (
          <Box key={i} sx={{ backgroundColor: "whitesmoke", p: 2, m: 2 }}>
            <TopList combo={c} />
          </Box>
        ))}
      </Box>
    );
  } else {
    return <Typography variant="h1">ERROR</Typography>;
  }
}
