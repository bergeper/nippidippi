import { Box, Typography } from "@mui/material";
import { Toplist } from "~/components/Toplist/Toplist";
import { ToplistTitle } from "~/components/Toplist/ToplistTitle";
import { trpcCaller } from "~/server/trpc/serverTRPC";

export default async function ToplistPage() {
  const combos = await trpcCaller.combination.getTopCombos();
  if (combos) {
    return (
      <Box
        component="section"
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ToplistTitle />
        <Toplist combos={combos} />
      </Box>
    );
  } else {
    return <Typography variant="h1">ERROR</Typography>;
  }
}
