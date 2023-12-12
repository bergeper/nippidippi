import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { combinationRouter } from "./routers/combination";

export const appRouter = createTRPCRouter({
  user: userRouter,
  combination: combinationRouter,
});

export type AppRouter = typeof appRouter;
