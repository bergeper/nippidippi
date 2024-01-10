"use client";

import {
  Card,
  CardContent,
  Grow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { type IChip } from "~/models/IChip";
import { theme } from "~/styles/theme/theme";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

interface Props {
  chip: IChip;
}

export const ChipResult = ({ chip }: Props) => {
  const mediumWindow = useMediaQuery(theme.breakpoints.up("sm"));
  const largeWindow = useMediaQuery(theme.breakpoints.up("md"));
  const [windowSize, setWindowSize] = useState<number>(200);

  useEffect(() => {
    if (!mediumWindow && !largeWindow) {
      setWindowSize(100);
    }

    if (mediumWindow) {
      setWindowSize(160);
    }
    if (largeWindow) {
      setWindowSize(250);
    }
  }, [mediumWindow, largeWindow]);

  const splittedText = chip.flavor.split("&");
  return (
    <Grow
      in={!!chip}
      mountOnEnter
      unmountOnExit
      style={{ transitionDelay: `${1750}ms` }}
    >
      <Card
        sx={{
          background: theme.palette.custom.bg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          position: "absolute",
          left: 30,
          top: 12,
          rotate: "-15deg",
          overflow: "hidden",
          p: 0,
          width: "120px",
          zIndex: 10,
          "&:hover": {
            scale: "1.5",
            left: 80,
            zIndex: 11,
          },
          [theme.breakpoints.up("sm")]: {
            width: "240px",
            left: "2%",
            transform: "translateY(+10%)",
          },
          [theme.breakpoints.up("md")]: {
            width: "300px",
            left: "2%",
            transform: "translateY(+10%)",
          },
          [theme.breakpoints.up("md")]: {
            width: "300px",
            left: 0,
            transform: "translateY(+10%)",
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "100%",
            maxWidth: "205px",
            [theme.breakpoints.up("sm")]: {
              width: "240px",
            },
            [theme.breakpoints.up("md")]: {
              width: "300px",
            },
          }}
        >
          {chip.imgUrl !== "/none" ? (
            <Image
              src={chip.imgUrl}
              width={windowSize}
              height={166.66666}
              style={{
                height: "auto",
              }}
              alt={"auto"}
            />
          ) : (
            " "
          )}
          <Typography variant="caption" sx={{ textAlign: "center" }}>
            {chip.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{ textAlign: "center", lineHeight: 1 }}
          >
            {splittedText.map((flavor, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {flavor}
                {i < splittedText.length - 1 && <br />}{" "}
                {i < splittedText.length - 1 && "&"}{" "}
              </Fragment>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </Grow>
  );
};
