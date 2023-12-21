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
    trpcHook.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
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
