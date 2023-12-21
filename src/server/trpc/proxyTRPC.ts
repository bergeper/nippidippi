import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { type AppRouter } from "../api/root";
import { getUrl } from "../api/urls";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const trpcApi = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: getUrl() })],
});
