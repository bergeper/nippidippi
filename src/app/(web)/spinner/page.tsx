"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { SaveResult } from "~/components/Spinner/SaveResult";
import { SpinnerWheel } from "~/components/Spinner/SpinnerWheel";
import { theme } from "~/styles/theme/theme";
import NilpaIllu from "public/images/nilpa.png";

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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <Typography variant="h4">Hello</Typography>
          <Image
            src={NilpaIllu}
            width={300}
            alt="Illustration of Nilpa the ChipGOD"
          />
        </Box>
        <Box
          component="article"
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <SpinnerWheel />
          <SaveResult />
        </Box>
      </Box>
    </>
  );
}
