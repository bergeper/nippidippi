"use client";

import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { theme } from "~/styles/theme/theme";
import NilpaIllu from "public/images/nippi.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { homepageCopy } from "~/texts/texts";
import { LinkBox } from "~/components/StartPage/LinkBox";
import { buttonHomePageStyle } from "~/styles/buttonStyle";

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
        height: "660px",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        [theme.breakpoints.up("sm")]: {
          height: "100%",
          width: "90%",
          p: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          mt: 20,
        },
        [theme.breakpoints.up("lg")]: {
          width: "1000px",
        },
      }}
    >
      <Box
        component="article"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          mb: -0.5,
          p: 0,

          [theme.breakpoints.up("sm")]: {
            width: "50%",
            p: 2,
            pb: 0,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Button color="inherit" sx={buttonHomePageStyle} href="/spinner">
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
          width: "auto",
          display: "flex",
          flexDirection: "column",
          background: theme.palette.custom.custom,
          p: 2,

          [theme.breakpoints.up("sm")]: {
            height: "auto",
            alignContent: "center",
            justifyContent: "center",
            width: "40%",
            borderRadius: "4px",
          },
          // RGB(238, 227, 172)
        }}
      >
        <Typography
          color="inherit"
          variant="h1"
          sx={{ fontSize: "1.34rem", textAlign: "center", pt: 2, pb: 2 }}
        >
          Welcome to NippiDippi
        </Typography>
        <Typography
          color="inherit"
          variant="h4"
          sx={{ fontSize: "1rem", px: 2 }}
        >
          Welcome to Chip and Dip Roulette, where flavor meets chance! Meet
          "Nippi," the culinary genius crafting unforgettable chip and dip
          combos. For the indecisive snacker, Nippi curates solid choices,
          removing the guesswork from your dilemma.
          <br />
          <br />
          {largeWindow && homepageCopy}
        </Typography>
      </Box>
      {mediumWindow && <LinkBox />}
    </Box>
  );
}
