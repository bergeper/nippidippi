import { Typography } from "@mui/material";
import { Toplist } from "~/components/Toplist/Toplist";
import { ToplistTitle } from "~/components/Toplist/ToplistTitle";
import { trpcCaller } from "~/server/trpc/serverTRPC";

export default async function ToplistPage() {
  const combos = await trpcCaller.combination.getTopCombos();
  if (combos) {
    return (
      <>
        <ToplistTitle />
        <Toplist combos={combos} />
      </>
    );
  } else {
    return <Typography variant="h1">ERROR</Typography>;
  }
}
