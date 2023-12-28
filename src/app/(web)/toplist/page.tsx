import { Box, Typography } from "@mui/material";
import { trpcApi } from "~/server/trpc/proxyTRPC";

export default async function ToplistPage() {
  const response = await trpcApi.combination.getTopCombos.query();
  console.log(response);
  return (
    <Box>
      <Typography variant="h4">Nilpa TopList</Typography>
      {response.map((c, i) => (
        <Box key={i} sx={{ backgroundColor: "whitesmoke", p: 2, m: 2 }}>
          <Typography>{c.name}</Typography>
          <Typography>{c.comboNr}</Typography>
          <Typography>{c.rating}</Typography>
          <Box>
            {/* <Typography>{c.chip.name}</Typography>
            <Typography>{c.dip.name}</Typography> */}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
