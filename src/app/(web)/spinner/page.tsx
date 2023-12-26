"use client";

import { Box } from "@mui/material";
import { SpinnerWheel } from "~/components/Spinner/SpinnerWheel";
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
            width: "50%",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          Grafic Man
        </Box>
        <Box
          component="article"
          sx={{
            width: "50%",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <SpinnerWheel />
        </Box>
      </Box>
    </>
  );
}
