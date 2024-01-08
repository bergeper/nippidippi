"use client";

import Image from "next/image";
import RouletteWheel from "public/images/RouletteWheel.png";
import { styled } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { theme } from "~/styles/theme/theme";

const SpinningWheelContainer = styled("div")(({}) => ({
  position: "relative",
  transition: "transform 2s ease-in-out",
  transformOrigin: "50% 50%",
}));

interface Props {
  spinning: boolean;
}

export const SpinningWheel = ({ spinning }: Props) => {
  const mediumWindow = useMediaQuery(theme.breakpoints.up("sm"));
  const largeWindow = useMediaQuery(theme.breakpoints.up("md"));
  const [windowSize, setWindowSize] = useState<number>();

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
  return (
    <SpinningWheelContainer
      style={{ transform: spinning ? `rotate(5000deg)` : "" }}
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
