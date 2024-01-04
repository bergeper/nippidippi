"use client";

import { Box, Button, Typography } from "@mui/material";
import { theme } from "~/styles/theme/theme";
import NilpaIllu from "public/images/nilpa.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          width: "100%",
          height: "auto",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse",
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
            // rotate: "-40deg",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <Image
            src={NilpaIllu}
            width={300}
            alt="Illustration of Nilpa the ChipGOD"
            priority={true}
          />
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
          <Typography color="inherit" variant="h1" sx={{ fontSize: "35px" }}>
            Dont know what chip to buy?
          </Typography>
          <Button color="inherit" href="/spinner">
            Press here!
          </Button>
        </Box>
      </Box>
    </>
  );
}
