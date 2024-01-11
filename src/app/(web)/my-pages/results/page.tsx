import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "~/app/api/auth/[...nextauth]/options";
import { UserCombosList } from "~/components/Combination/UserCombosList";
import { trpcCaller } from "~/server/trpc/serverTRPC";

export default async function ResultsPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    const combos = await trpcCaller.combination.getTestedCombinations({
      userId: session.user.id,
    });
    return (
      <>
        <UserCombosList combos={combos} />
      </>
    );
  }
  if (!session) {
    redirect("/");
  }
}
