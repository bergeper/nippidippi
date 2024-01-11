import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "~/app/api/auth/[...nextauth]/options";
import { DeleteUser } from "~/components/UserSettings/DeleteUser";
import { SettingsInfo } from "~/components/UserSettings/SettingsInfo";

export default async function Page() {
  const session = await getServerSession(authOptions);

  // Change to delete account.
  if (!session) {
    redirect("/");
  }

  if (session) {
    return (
      <>
        <SettingsInfo />
        <DeleteUser />
      </>
    );
  }
}
