/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "../api/root";
import { httpBatchLink } from "@trpc/client";
import { type PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const trpcHook = createTRPCReact<AppRouter>({});

export function TRPCProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    trpcHook.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",

          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              // authorization: getAuthCookie(),
            };
          },
        }),
      ],
    })
  );

  return (
    <trpcHook.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpcHook.Provider>
  );
}
