"use client";

import {
  Box,
  Grid,
  Rating,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { type IFullCombination } from "~/models/ICombination";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useEffect } from "react";
import { theme } from "~/styles/theme/theme";

interface Props {
  combo: IFullCombination;
  toplistNum: number;
}

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export const ToplistCombo = ({ combo, toplistNum }: Props) => {
  const mediumWindow = useMediaQuery(theme.breakpoints.up("sm"));
  const largeWindow = useMediaQuery(theme.breakpoints.up("md"));
  const [chipSize, setChipSize] = useState<number>(80);
  const [dipSize, setDipSize] = useState<number>(80);

  useEffect(() => {
    if (!mediumWindow && !largeWindow) {
      setDipSize(60);
      setChipSize(80);
    }

    if (mediumWindow) {
      setDipSize(80);
      setChipSize(120);
    }
    if (largeWindow) {
      setDipSize(140);
      setChipSize(200);
    }
  }, [mediumWindow, largeWindow]);
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.225rem",
          p: 2,
        }}
      >
        {toplistNum}. {combo.name}
      </Typography>
      <Grid container justifyContent="space-evenly" p={2}>
        <Grid
          item
          xs={6}
          sm={3}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image
            src={combo.chip.imgUrl}
            width={chipSize}
            height={83.333}
            style={{ height: "auto", top: 0, rotate: "-5deg" }}
            alt={combo.chip.name + " - " + combo.chip.flavor}
          />
          <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
            {combo.chip.name}
            <br />
            {combo.chip.flavor}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          top={0}
        >
          {combo.dip.imgUrl !== "/none" ? (
            <Image
              src={combo.dip.imgUrl}
              width={dipSize}
              height={83.333}
              style={{ height: "auto", top: 0, rotate: "5deg" }}
              alt={combo.dip.name + " - " + combo.dip.flavor}
            />
          ) : (
            ""
          )}
          <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
            {combo.dip.name} <br /> {combo.dip.flavor}
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          mb: 2,
        }}
      >
        <StyledRating
          name="customized-color"
          defaultValue={combo.rating}
          precision={0.25}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          readOnly
        />
      </Box>
    </>
  );
};
