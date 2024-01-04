import { Box, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "~/app/api/auth/[...nextauth]/options";
import { CombinationList } from "~/components/Combination/CombinationList";
import { trpcCaller } from "~/server/trpc/serverTRPC";

export default async function ResultsPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    const combos = await trpcCaller.combination.getTestedCombinations({
      userId: session.user.id,
    });
    return (
      <>
        <Typography>Your tested Combos: </Typography>
        {combos.map((c, i) => (
          <Box key={i} sx={{ backgroundColor: "whitesmoke", p: 2, m: 2 }}>
            <CombinationList combo={c.combination} />
          </Box>
        ))}
      </>
    );
  }
  if (!session) {
    redirect("/");
  }
}
