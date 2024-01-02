import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "~/app/api/auth/[...nextauth]/options";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);

  // Change to a better reroute
  if (!session) {
    redirect("/");
  }
  return <h1>My Pages</h1>;
}
