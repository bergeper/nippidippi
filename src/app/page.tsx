import { getServerAuthSession } from "~/app/api/auth/[...nextauth]/options";

import { Button } from "@mui/material";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <>
      <Button>Sign In</Button>

      {session && <p>{session.id}</p>}
      <Button>Log out</Button>
    </>
  );
}
