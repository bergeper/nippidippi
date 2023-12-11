import { getServerAuthSession } from "~/app/api/auth/[...nextauth]/options";
// import { api } from "~/trpc/server";
import { Button } from "@mui/material";

export default async function Home() {
  // await api.user.createUser.query({ name: "perssan", password: "123123" });
  const session = await getServerAuthSession();

  return (
    <>
      <Button>Sign In</Button>

      {session && <p>{session.id}</p>}
      <Button>Log out</Button>
    </>
  );
}
