import { initTRPC, TRPCError } from "@trpc/server";
import { type Session } from "next-auth";
import { type NextRequest } from "next/server";
import { getServerAuthSession } from "~/app/api/auth/[...nextauth]/options";
import { db } from "../db";

interface CreateContextOptions {
  headers: Headers | null;
  session: Session | null;
  ssg?: true;
}

/**
 * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
 * it from here.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
 */
export const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    headers: opts.headers,
    ssg: opts.ssg,
    db,
  };
};

/**
 * This is the actual context you will use in your router. It will be used to process every request
 * that goes through your tRPC endpoint.
 *
 * @see https://trpc.io/docs/context
 */
export const createTRPCContext = async (opts: { req: NextRequest }) => {
  const session = await getServerAuthSession();
  return createInnerTRPCContext({
    headers: opts.req.headers,
    session,
  });
};

/*
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
export const t = initTRPC.context<typeof createTRPCContext>().create();

/*
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;

/** Middleware for checking if user is admin */
const isLoggedIn = middleware(async (opts) => {
  const { ctx } = opts;
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next({
    ctx: {
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

const isServer = middleware(async (opts) => {
  const { ctx } = opts;
  if (!ctx.ssg) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return opts.next();
});

/** Define new procedures that meet specific access criteria */
export const loggedInProcedure = t.procedure.use(isLoggedIn);
export const serverProcedure = t.procedure.use(isServer);
