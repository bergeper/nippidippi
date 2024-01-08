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
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { type ReactElement, type Ref, useEffect, useState } from "react";
import { type ICombination } from "~/models/ICombination";
import { trpcApi } from "~/server/trpc/proxyTRPC";
import WheelWithArrow from "public/images/RouletteBoard.png";
import { ShowCombo } from "../Combination/ShowCombo";
import { SpinningWheel } from "./SpinningWheel";
import { defaultCombo } from "~/models/DefaultObject";
import { theme } from "~/styles/theme/theme";
import { type TransitionProps } from "@mui/material/transitions";
import React from "react";

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
  const [windowSize, setWindowSize] = useState<number>();
  const [spinning, setSpinning] = useState<boolean>(false);
  const [combo, setCombo] = useState<ICombination>();
  const [error, setError] = useState<string>();
  const { data: session } = useSession();

  useEffect(() => {
    if (!mediumWindow && !largeWindow) {
      setWindowSize(150);
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
    const response = await trpcApi.combination.getRandomCombo.query();
    setTimeout(() => {
      if (response) {
        setCombo(response);
        console.log(spinning);
      } else {
        setError("Something went wrong");
      }
    }, 2000);
    // setSpinning(false);
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
    setOpenSave(!openSave);
  };

  return (
    <>
      <Typography variant="h4" sx={{ fontSize: "1.2rem" }}>
        Spin the wheel and see what you get!
      </Typography>
      {session && (
        <Button onClick={getComboLoggedIn} sx={{ zIndex: 10 }}>
          Spin the wheel
        </Button>
      )}
      {!session && (
        <Button onClick={getCombo} sx={{ zIndex: 10 }}>
          Spin the wheel
        </Button>
      )}

      <Box sx={{ display: "flex", position: "relative" }}>
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
              <Button onClick={() => saveResult(combo.id)}>Save Result</Button>
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
                    You have saved this combination and can check it out and
                    rate it on your pages!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenSave(!openSave)}>
                    Ok, nice!
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          )}
        </Box>
      )}
      {error}
    </>
  );
};
