import { Button, Typography } from "@mui/material";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "~/app/api/auth/[...nextauth]/options";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);

  // Change to a better reroute
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <Typography>Welcome to {session.user.username}</Typography>
      <Typography>Here you can rate your tested combinations</Typography>
      <Button href="/my-pages/results">The Combos you tested</Button>
      <Button href="/my-pages/settings">Your Settings</Button>
    </>
  );
}
