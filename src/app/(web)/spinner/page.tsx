"use client";

import { Box } from "@mui/material";
import { Suspense } from "react";
import { RouletteBoard } from "~/components/Spinner/RouletteBoard";
import { theme } from "~/styles/theme/theme";

export default function SpinnerPage() {
  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          width: "100%",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box
          component="article"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <Suspense>
            <RouletteBoard />
          </Suspense>
        </Box>
      </Box>
    </>
  );
}
