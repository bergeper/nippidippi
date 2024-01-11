"use client";

import Image from "next/image";
import RouletteWheel from "public/images/RouletteWheel.png";
import { styled } from "@mui/system";
import { css, keyframes, useMediaQuery } from "@mui/material";
import { useState, useEffect, type Dispatch, type SetStateAction } from "react";
import { theme } from "~/styles/theme/theme";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
    scale: 1;
  }
  20%{
    scale: 1.125;
  }
  40%{
    scale: 1.05;
  }
  60%{
    scale: 1.125;
  }
  80%{
    scale: 1;
  }
  100%{
    transform: rotate(2880deg);
    scale: 1;
  }
`;

const Spinner = styled("div")<{ isSpinning: boolean }>`
  ${({ isSpinning }) =>
    isSpinning &&
    css`
      -webkit-animation: ${spin} 2s infinite ease;
      animation: ${spin} 2s infinite ease;
    `}
`;

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
      setWindowSize(350);
    }
    if (largeWindow) {
      setWindowSize(400);
    }
  }, [mediumWindow, largeWindow]);

  useEffect(() => {
    if (spinning) {
      const timeoutId = setTimeout(() => {
        if (spinning) {
          isSpinning(false);
        }
      }, 1950);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [spinning, isSpinning]);

  return (
    <Spinner isSpinning={spinning}>
      <Image
        src={RouletteWheel}
        width={windowSize}
        alt="Spinner wheel"
        style={{ zIndex: 1 }}
      />
    </Spinner>
  );
};
