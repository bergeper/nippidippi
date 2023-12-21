import { userRouter } from "./routers/user";
import { combinationRouter } from "./routers/combination";
import { router } from "./trpc";

export const appRouter = router({
  user: userRouter,
  combination: combinationRouter,
});

export type AppRouter = typeof appRouter;
