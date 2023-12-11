import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { db } from "~/server/db";

declare module "next-auth" {
  interface Session {
    id: string;
    username: string;
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session }) => ({
      ...session,
    }),
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Type you username...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Type your Password...",
        },
      },
      async authorize(credentials) {
        if (!credentials) throw Error("missing credentials");
        const { username, password } = credentials;

        const user = await db.user.findUnique({
          where: { username },
        });
        console.log(user);
        if (!user || user.password !== password) return null;

        return user;
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
