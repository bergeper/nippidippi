/* eslint-disable @typescript-eslint/no-unsafe-call */
import { appRouter } from "../api/root";
import { createInnerTRPCContext } from "../api/trpc";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const context = createInnerTRPCContext({
  session: null,
});

/** Should be used in RSC to generate pages with SSG */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
export const trpcCaller = appRouter.createCaller(context);
