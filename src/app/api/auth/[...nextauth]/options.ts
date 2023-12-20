import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  type DefaultSession,
  getServerSession,
  type NextAuthOptions,
} from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { db } from "src/server/db";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: async ({ session }) => {
      console.log("sessions 1: ", session);
      if (!session.user?.email) return { ...session };
      const dbUser = await db.user.findUnique({
        where: { email: session.user?.email },
      });

      if (!dbUser) return { ...session };
      console.log("sessions 2: ", session);
      return {
        ...session,
        user: {
          ...session.user,
          id: dbUser.id,
          username: dbUser.username,
        },
      };
    },
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Type you Email...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Type your Password...",
        },
      },
      async authorize(credentials) {
        if (!credentials) throw Error("missing credentials");
        const { email, password } = credentials;
        console.log(credentials);

        const user = await db.user.findUnique({
          where: { email: email },
        });
        if (!user || user.password !== password) return null;

        return user;
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
