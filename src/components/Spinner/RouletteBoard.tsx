"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  useMediaQuery,
} from "@mui/material";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { type ReactElement, type Ref, useEffect, useState } from "react";
import { type IFullCombination } from "~/models/ICombination";
import { trpcApi } from "~/server/trpc/proxyTRPC";
import WheelWithArrow from "public/images/RouletteBoard.png";
import { ShowCombo } from "../Combination/ShowCombo";
import { SpinningWheel } from "./SpinningWheel";
import { defaultCombo } from "~/models/DefaultObject";
import { theme } from "~/styles/theme/theme";
import { type TransitionProps } from "@mui/material/transitions";
import React from "react";
import { SpinnerTitle } from "./SpinnerTitle";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const RouletteBoard = () => {
  const mediumWindow = useMediaQuery(theme.breakpoints.up("sm"));
  const largeWindow = useMediaQuery(theme.breakpoints.up("md"));
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
      setWindowSize(400);
    }
    if (largeWindow) {
      setWindowSize(500);
    }
  }, [mediumWindow, largeWindow]);

  const getCombo = async () => {
    setCombo(defaultCombo);
    setSpinning(true);
    setResFromTRPC(false);
    if (session) {
      const response =
        await trpcApi.combination.getRandomComboIfLoggedIn.query();
      setTimeout(() => {
        if (!spinning) {
          if (response) {
            setCombo(response);
            setSpinning(false);
          }
        }
      }, 3000);
    } else {
      const response = await trpcApi.combination.getRandomCombo.query();
      setTimeout(() => {
        if (response) {
          setCombo(response);
        }
      }, 2000);
    }
    // setSpinning(false);
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
      <SpinnerTitle />
      <Box sx={{ display: "flex", position: "relative" }} onClick={getCombo}>
        <SpinningWheel spinning={spinning} isSpinning={setSpinning} />
        <Image
          src={WheelWithArrow}
          width={windowSize}
          alt="Spinner Wheel Frame"
          style={{ position: "absolute" }}
        />
      </Box>

      {combo && !spinning && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            mt: 2,
            backgroundColor: "whitesmoke",
          }}
        >
          <ShowCombo combo={combo} />
          {session && (
            <>
              <Button
                onClick={() => saveResult(combo.id)}
                disabled={resFromTRPC}
              >
                Save Result
              </Button>
            </>
          )}
        </Box>
      )}

      <Dialog
        open={openSave}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpenSave(!openSave)}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          backdropFilter: "none",
        }}
      >
        <DialogTitle>{"This combo is saved!!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You have saved this combination and can check it out and rate it on
            your pages!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenSave(!openSave)}>Ok, nice!</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
