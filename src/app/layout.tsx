import { TRPCProvider } from "~/server/trpc/reactTRPC";
import AuthSessionProvider from "./NextAuthProvider";
import { Box } from "@mui/material";
import MuiThemeProvider from "./MuiThemeProvider";

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
      <Box component="body" sx={{ margin: 0 }}>
        <AuthSessionProvider>
          <MuiThemeProvider>
            <TRPCProvider>{children}</TRPCProvider>
          </MuiThemeProvider>
        </AuthSessionProvider>
      </Box>
    </html>
  );
}
