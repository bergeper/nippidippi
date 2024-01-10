import { Card, CardContent, Typography } from "@mui/material";
import { type IDip } from "~/models/IDip";
import { theme } from "~/styles/theme/theme";
import Image from "next/image";
import { Fragment } from "react";

interface Props {
  dip: IDip;
}

export const DipResult = ({ dip }: Props) => {
  const splittedText = dip.flavor.split("&");
  return (
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
        }}
      >
        {dip.imgUrl !== "/none" ? (
          <Image
            src={dip.imgUrl}
            width={90}
            height={166.66666}
            style={{
              height: "auto",
              width: "80px",
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
  );
};
