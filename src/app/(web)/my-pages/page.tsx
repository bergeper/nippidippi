import { Box } from "@mui/material";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "~/app/api/auth/[...nextauth]/options";
import { DisplayUser } from "~/components/MyPages/DisplayUser";
import { UserChoices } from "~/components/MyPages/UserChoices";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);

  // Change to a better reroute
  if (!session) {
    redirect("/");
  }
  if (session.user) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          height: "100%",
          width: "100%",
          mt: 2,
        }}
      >
        <Box
          sx={{
            gap: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <DisplayUser user={session.user} />

          <UserChoices />
        </Box>
      </Box>
    );
  }
}
