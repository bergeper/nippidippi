import { Box, Typography } from "@mui/material";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "~/app/api/auth/[...nextauth]/options";
import { ChangePassword } from "~/components/UserSettings/ChangePassword";

export default async function Page() {
  const session = await getServerSession(authOptions);

  // Change to a better reroute
  if (!session) {
    redirect("/");
  }

  return (
    <Box>
      <Typography>Settings</Typography>
      <Typography>Do you want to change your password?</Typography>
      <ChangePassword />
    </Box>
  );
}
