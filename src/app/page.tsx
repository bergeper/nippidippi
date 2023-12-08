import { SessionProvider } from "next-auth/react";
import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  // await api.user.createUser.query({ name: "per", password: "123123" });
  // const session = await getServerAuthSession();

  return (
    <main>
      <div>
        <h1>
          Create <span>T3</span> App
        </h1>
        <div>
          <Link
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3>First Steps →</h3>
            <div>
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link href="https://create.t3.gg/en/introduction" target="_blank">
            <h3>Documentation →</h3>
            <div>
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
        <div>
          {/* <p>{hello ? hello.greeting : "Loading tRPC query..."}</p> */}

          <div>
            <p></p>
            <Link href={"/api/auth/signout"}>{"Sign out"}</Link>
            <Link href={"/api/auth/signin"}>{"Sign in"}</Link>
          </div>
        </div>

        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  // const latestPost = await api.post.getLatest.query();

  return <div>hello {session.user.username}</div>;
}
