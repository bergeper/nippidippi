import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import AuthSessionProvider from "./NextAuthProvider";

export const metadata = {
  title: "NippiDippi",
  description: "Find the perfect combination",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthSessionProvider>
          <TRPCReactProvider cookies={cookies().toString()}>
            {children}
          </TRPCReactProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
