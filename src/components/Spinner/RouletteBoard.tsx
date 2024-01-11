"use client";

import { Box, Button, useMediaQuery } from "@mui/material";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { type IFullCombination } from "~/models/ICombination";
import { trpcApi } from "~/server/trpc/proxyTRPC";
import WheelWithArrow from "public/images/RouletteBoard.png";
import { SpinningWheel } from "./SpinningWheel";
import { defaultCombo } from "~/models/DefaultObject";
import { theme } from "~/styles/theme/theme";
import React from "react";
import { buttonSpinnerStyle } from "~/styles/buttonStyle";
import { RouletteBoardTitle } from "./RouletteBoardTitle";
import { ComboTitle } from "./Combo/ComboTitle";
import { ChipResult } from "./Combo/ChipResult";
import { DipResult } from "./Combo/DipResult";
import { SaveCombo } from "./Combo/SaveCombo";

export const RouletteBoard = () => {
  const mediumWindow = useMediaQuery(theme.breakpoints.up("sm"));
  const largeWindow = useMediaQuery(theme.breakpoints.up("md"));
  const target = useRef<HTMLImageElement | null>(null);
  const [openSave, setOpenSave] = useState(false);
  const [windowSize, setWindowSize] = useState<number>(200);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [combo, setCombo] = useState<IFullCombination>();
  const [resFromTRPC, setResFromTRPC] = useState<boolean>(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (!mediumWindow && !largeWindow) {
      setWindowSize(200);
    }
    if (mediumWindow) {
      setWindowSize(350);
    }
    if (largeWindow) {
      setWindowSize(400);
    }
  }, [mediumWindow, largeWindow]);

  const getCombo = async () => {
    setCombo(defaultCombo);
    setSpinning(true);
    setResFromTRPC(false);
    if (target.current && !mediumWindow && !largeWindow) {
      target.current.scrollIntoView({ behavior: "smooth" });
    }
    if (session) {
      const response =
        await trpcApi.combination.getRandomComboIfLoggedIn.query();
      setTimeout(() => {
        if (!spinning) {
          if (response) {
            setCombo(response);
          }
        }
      }, 2000);
    } else {
      const response = await trpcApi.combination.getRandomCombo.query();
      setTimeout(() => {
        if (response) {
          setCombo(response);
        }
      }, 2000);
    }
  };

  const saveResult = async (id: string) => {
    const response = await trpcApi.combination.saveCombo.mutate({
      comboId: id,
    });
    if (response) {
      setResFromTRPC(response);
    } else {
      setResFromTRPC(response);
    }
    setOpenSave(!openSave);
  };

  return (
    <>
      <Box ref={target} />
      <RouletteBoardTitle />
      <Box
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          pt: 2,
        }}
      >
        <SpinningWheel spinning={spinning} isSpinning={setSpinning} />
        <Image
          src={WheelWithArrow}
          width={windowSize}
          alt="Spinner Wheel Frame"
          style={{ position: "absolute" }}
          onClick={getCombo}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: session ? "390px" : "390px",
          [theme.breakpoints.up("sm")]: {
            height: "500px",
          },
          [theme.breakpoints.up("md")]: {
            height: "700px",
          },
          mb: 5,
        }}
      >
        {combo && !spinning && (
          <>
            <ComboTitle comboName={combo.name} />
            <Box
              sx={{
                display: "flex",
                width: "330px",
                height: "300px",
                position: "relative",
                [theme.breakpoints.up("sm")]: {
                  height: "500px",
                  width: "530px",
                },
                [theme.breakpoints.up("md")]: {
                  height: "700px",
                  width: "680px",
                },
                [theme.breakpoints.up("lg")]: {
                  height: "700px",
                  width: "680px",
                },
              }}
            >
              <DipResult dip={combo.dip} />
              <ChipResult chip={combo.chip} />
              {session && !spinning && (
                <Box
                  sx={{
                    width: "140px",
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <Button
                    color="inherit"
                    onClick={() => saveResult(combo.id)}
                    disabled={resFromTRPC}
                    sx={buttonSpinnerStyle}
                  >
                    Save Result
                  </Button>
                </Box>
              )}
            </Box>
          </>
        )}
      </Box>

      {/* Dialog for saving combo */}
      <SaveCombo isOpen={openSave} isDialogOpen={setOpenSave} />
    </>
  );
};
