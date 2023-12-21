import { TRPCProvider } from "~/server/trpc/reactTRPC";
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
          <TRPCProvider>{children}</TRPCProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
