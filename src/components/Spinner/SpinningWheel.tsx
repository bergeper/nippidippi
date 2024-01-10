"use client";

import Image from "next/image";
import RouletteWheel from "public/images/RouletteWheel.png";
import { styled } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect, type Dispatch, type SetStateAction } from "react";
import { theme } from "~/styles/theme/theme";

const SpinningWheelContainer = styled("div")(() => ({
  position: "relative",
  transition: "transform 2s ease-in-out",
  transformOrigin: "50% 50%",
}));

interface Props {
  spinning: boolean;
  isSpinning: Dispatch<SetStateAction<boolean>>;
}

export const SpinningWheel = ({ spinning, isSpinning }: Props) => {
  const mediumWindow = useMediaQuery(theme.breakpoints.up("sm"));
  const largeWindow = useMediaQuery(theme.breakpoints.up("md"));
  const [windowSize, setWindowSize] = useState<number>(200);

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

  useEffect(() => {
    if (spinning) {
      const timeoutId = setTimeout(() => {
        if (spinning) {
          isSpinning(false);
        }
      }, 4000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [spinning, isSpinning]);

  return (
    <SpinningWheelContainer
      style={{
        transform: spinning ? `rotate(${2880}deg)` : "rotate(0)deg",
      }}
    >
      <Image
        src={RouletteWheel}
        width={windowSize}
        alt="Spinner wheel"
        style={{ zIndex: 1 }}
      />
    </SpinningWheelContainer>
  );
};
