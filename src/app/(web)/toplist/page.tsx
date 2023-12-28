import { Box, Typography } from "@mui/material";
import { TopList } from "~/components/Toplist/TopList";
import { trpcCaller } from "~/server/trpc/serverTRPC";

export default async function ToplistPage() {
  const combos = await trpcCaller.combination.getTopCombos();
  if (combos) {
    return (
      <Box component="section">
        <Typography variant="h4">Nilpa TopList</Typography>
        {combos.map((c, i) => (
          <Box key={i} sx={{ backgroundColor: "whitesmoke", p: 2, m: 2 }}>
            <TopList combo={c} />
          </Box>
        ))}
      </Box>
    );
  } else {
    return <>ERROR</>;
  }
}
