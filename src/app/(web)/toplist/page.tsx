import { Box, Typography } from "@mui/material";
import { TopList } from "~/components/Toplist/TopList";
import { trpcApi } from "~/server/trpc/proxyTRPC";

export default async function ToplistPage() {
  const response = await trpcApi.combination.getTopCombos.query();
  console.log(response);
  return (
    <Box>
      <Typography variant="h4">Nilpa TopList</Typography>
      {response.map((c, i) => (
        <Box key={i} sx={{ backgroundColor: "whitesmoke", p: 2, m: 2 }}>
          <TopList combo={c} />
        </Box>
      ))}
    </Box>
  );
}
