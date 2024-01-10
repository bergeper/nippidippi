"use client";

import {
  Card,
  CardContent,
  Grow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { type IDip } from "~/models/IDip";
import { theme } from "~/styles/theme/theme";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

interface Props {
  dip: IDip;
}

export const DipResult = ({ dip }: Props) => {
  const mediumWindow = useMediaQuery(theme.breakpoints.up("sm"));
  const largeWindow = useMediaQuery(theme.breakpoints.up("md"));
  const [windowSize, setWindowSize] = useState<number>(200);

  useEffect(() => {
    if (!mediumWindow && !largeWindow) {
      setWindowSize(80);
    }

    if (mediumWindow) {
      setWindowSize(120);
    }
    if (largeWindow) {
      setWindowSize(200);
    }
  }, [mediumWindow, largeWindow]);

  const splittedText = dip.flavor.split("&");
  return (
    <Grow
      in={!!dip}
      mountOnEnter
      unmountOnExit
      style={{ transitionDelay: `${2250}ms` }}
    >
      <Card
        sx={{
          background: theme.palette.custom.bg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          position: "absolute",
          rotate: "15deg",
          right: 30,
          top: 12,
          overflow: "hidden",
          p: 0,
          width: "120px",
          zIndex: 10,
          "&:hover": {
            scale: "1.5",
            right: 80,
            zIndex: 11,
          },
          [theme.breakpoints.up("sm")]: {
            width: "240px",
            right: "2%",
            transform: "translateY(+10%)",
          },
          [theme.breakpoints.up("md")]: {
            width: "300px",
            right: "2%",
            transform: "translateY(+10%)",
          },
          [theme.breakpoints.up("lg")]: {
            right: 0,
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
            width: "175px",
            py: 1,
            pb: 1,
            [theme.breakpoints.up("sm")]: {
              width: "240px",
            },
            [theme.breakpoints.up("md")]: {
              width: "300px",
            },
          }}
        >
          {dip.imgUrl !== "/none" ? (
            <Image
              src={dip.imgUrl}
              width={windowSize}
              height={166.66666}
              style={{
                height: "auto",
              }}
              alt={dip.name + " " + dip.flavor}
            />
          ) : (
            ""
          )}
          <Typography variant="caption" sx={{ textAlign: "center" }}>
            {dip.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{ textAlign: "center", lineHeight: 1 }}
          >
            {splittedText.map((flavor, i) => (
              <Fragment key={i}>
                {i > 0 && <br />} {flavor}
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
