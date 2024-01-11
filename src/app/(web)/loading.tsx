"use client";

import { Backdrop, css, keyframes, styled } from "@mui/material";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
    scale: 1;
  }
  100%{
    transform: rotate(1080deg);
    scale: 1;
  }
`;

const Spinner = styled("div")<{ isSpinning: boolean }>`
  ${({ isSpinning }) =>
    isSpinning &&
    css`
      -webkit-animation: ${spin} 2s infinite linear;
      animation: ${spin} 2s infinite linear;
    `}
`;

import Image from "next/image";
import RouletteWheel from "public/images/RouletteWheel.png";

export default function Loading() {
  return (
    <Backdrop open={true}>
      <Spinner isSpinning={true}>
        <Image
          src={RouletteWheel}
          width={150}
          alt="Spinner wheel"
          style={{ zIndex: 1 }}
        />
      </Spinner>
    </Backdrop>
  );
}
