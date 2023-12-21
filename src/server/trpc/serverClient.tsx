import { appRouter } from "../api/root";
import { createInnerTRPCContext } from "../api/trpc";

const context = createInnerTRPCContext({
  session: null,
  headers: null,
  ssg: true,
});

/** Should be used in RSC to generate pages with SSG */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const trpcCaller = appRouter.createCaller(context);
