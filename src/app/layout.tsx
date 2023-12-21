import AuthSessionProvider from "./NextAuthProvider";
import { TRPCProvider } from "~/server/trpc/hookClient";

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
