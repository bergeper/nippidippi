import { Card, CardContent, Typography } from "@mui/material";
import { type IChip } from "~/models/IChip";
import { theme } from "~/styles/theme/theme";
import Image from "next/image";
import { Fragment } from "react";

interface Props {
  chip: IChip;
}

export const ChipResult = ({ chip }: Props) => {
  const splittedText = chip.flavor.split("&");
  return (
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
        }}
      >
        {chip.imgUrl !== "/none" ? (
          <Image
            src={chip.imgUrl}
            width={125}
            height={166.66666}
            style={{
              height: "auto",
              width: "100px",
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
  );
};
