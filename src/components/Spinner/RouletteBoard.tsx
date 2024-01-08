"use client";

import { Box, Button, Typography, useMediaQuery } from "@mui/material";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { type ICombination } from "~/models/ICombination";
import { trpcApi } from "~/server/trpc/proxyTRPC";
import WheelWithArrow from "public/images/RouletteBoard.png";
import { ShowCombo } from "../Combination/ShowCombo";
import { SpinningWheel } from "./SpinningWheel";
import { defaultCombo } from "~/models/DefaultObject";
import { theme } from "~/styles/theme/theme";

export const RouletteBoard = () => {
  const mediumWindow = useMediaQuery(theme.breakpoints.up("sm"));
  const largeWindow = useMediaQuery(theme.breakpoints.up("md"));
  const [windowSize, setWindowSize] = useState<number>();
  const [spinning, setSpinning] = useState<boolean>(false);
  const [combo, setCombo] = useState<ICombination>();
  const [error, setError] = useState<string>();
  const { data: session } = useSession();

  useEffect(() => {
    if (!mediumWindow && !largeWindow) {
      setWindowSize(250);
    }

    if (mediumWindow) {
      setWindowSize(400);
    }
    if (largeWindow) {
      setWindowSize(500);
    }
  }, [mediumWindow, largeWindow]);

  const getCombo = async () => {
    setCombo(defaultCombo);
    setSpinning(!spinning);
    const response = await trpcApi.combination.getRandomCombo.query();
    setTimeout(() => {
      if (response) {
        setCombo(response);
      } else {
        setError("Something went wrong");
      }
    }, 3000);
  };

  const getComboLoggedIn = async () => {
    setCombo(defaultCombo);
    setSpinning(true);
    const response = await trpcApi.combination.getRandomComboIfLoggedIn.query();
    setTimeout(() => {
      setSpinning(false);
      if (!spinning) {
        if (response) {
          setCombo(response);
        } else {
          setError("Something went wrong");
        }
      }
    }, 3000);
  };

  const saveResult = async (id: string) => {
    const response = await trpcApi.combination.saveCombo.mutate({
      comboId: id,
    });

    if (response) {
      console.log(combo);
    } else {
      setError("Something went wrong");
    }
  };

  return (
    <>
      <Typography variant="h4" sx={{ fontSize: "1.2rem" }}>
        Spin the wheel and see what you get!
      </Typography>
      {session ? (
        <Button onClick={getComboLoggedIn} sx={{ zIndex: 10 }}>
          Spin the wheel
        </Button>
      ) : (
        <Button onClick={getCombo} sx={{ zIndex: 10 }}>
          Spin the wheel
        </Button>
      )}
      <Box sx={{ display: "flex", position: "relative" }}>
        <SpinningWheel spinning={spinning} />
        <Image
          src={WheelWithArrow}
          width={windowSize}
          alt="Spinner Wheel Frame"
          style={{ position: "absolute" }}
        />
      </Box>
      {combo && <ShowCombo combo={combo} />}
      {error}
      {session && combo && (
        <Button onClick={() => saveResult(combo.id)}>Save Result</Button>
      )}
    </>
  );
};
