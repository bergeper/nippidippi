import { getServerAuthSession } from "~/app/api/auth/[...nextauth]/options";
import { Auth } from "~/components/Auth/Auth";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <>
      <Auth />
      {session && <p>{session.id}</p>}
    </>
  );
}
