"use client";

import { Box } from "@mui/material";
import { type PropsWithChildren } from "react";
import { Auth } from "~/components/Auth/Auth";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Box component="main" sx={{ minHeight: "100vh" }}>
        {children}
        <Auth />
      </Box>
    </>
  );
}
