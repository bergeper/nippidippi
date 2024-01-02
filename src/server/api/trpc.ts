import { initTRPC, TRPCError } from "@trpc/server";
import { type Session } from "next-auth";
import { getServerAuthSession } from "~/app/api/auth/[...nextauth]/options";
import { db } from "../db";

interface CreateContextOptions {
  session: Session | null;
}
export const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    db,
  };
};

/**
 * KEEP THIS DOC
 * @see https://trpc.io/docs/context
 */

export const createTRPCContext = async () => {
  const session = await getServerAuthSession();
  console.log(session);
  // eslint-disable-next-line @typescript-eslint/await-thenable
  return await createInnerTRPCContext({
    session: session,
  });
};

/*
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
export const t = initTRPC.context<typeof createTRPCContext>().create();

// Router
export const router = t.router;

// Middleware
export const middleware = t.middleware;

// Public Procedure to use on resolvers, anyone can access
export const publicProcedure = t.procedure;

// Middleware for checking if the user is logged in
const isLoggedIn = middleware(async ({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

// Procedure for resolvers when you are logged in.
export const loggedInProcedure = t.procedure.use(isLoggedIn);
