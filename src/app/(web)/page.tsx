"use client";

import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { theme } from "~/styles/theme/theme";
import NilpaIllu from "public/images/nippi.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const mediumWindow = useMediaQuery(theme.breakpoints.up("sm"));
  const largeWindow = useMediaQuery(theme.breakpoints.up("md"));
  const [windowSize, setWindowSize] = useState<number>(350);

  useEffect(() => {
    if (mediumWindow) {
      setWindowSize(400);
    }
    if (largeWindow) {
      setWindowSize(500);
    }
  }, [mediumWindow, largeWindow]);
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        width: "100%",
        height: "auto",
        [theme.breakpoints.down("sm")]: {
          height: "660px",
          flexDirection: "column-reverse",
          justifyContent: "space-between",
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
          p: 2,
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            mb: -0.5,
            p: 0,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Button
            color="inherit"
            sx={{
              position: "absolute",
              right: 0,
              top: 60,
              rotate: "25deg",
              display: "inline-block",
              padding: "10px 20px",
              background: "white",
              borderRadius: "25px", // Adjust the value as needed
              fontSize: "1rem",
            }}
            href="/spinner"
          >
            NippiDippi Wheel
          </Button>
          <Image
            src={NilpaIllu}
            width={windowSize}
            alt="Illustration of Nilpa the ChipGOD"
            priority={true}
          />
        </Box>
      </Box>
      <Box
        component="article"
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6))",
          p: 2,
          height: "auto",
          [theme.breakpoints.down("sm")]: {
            width: "auto",
          },
        }}
      >
        <Typography
          color="inherit"
          variant="h1"
          sx={{ fontSize: "1.3rem", textAlign: "center", pt: 2, pb: 2 }}
        >
          Welcome to NippiDippi
        </Typography>
        <Typography color="inherit" variant="h1" sx={{ fontSize: "1.225rem" }}>
          Where our Chip Wheel guides you to the perfect chip and dip pairing.
          Elevate your snacking experience with our crispy delights and
          flavorful dips – the ultimate match for your taste buds!
        </Typography>
      </Box>
    </Box>
  );
}
