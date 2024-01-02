import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { type PropsWithChildren } from "react";
import { authOptions } from "~/app/api/auth/[...nextauth]/options";

export default async function HomeLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);

  // Change to a better reroute
  if (!session) {
    redirect("/spinner");
  }
  return <>{children}</>;
}
