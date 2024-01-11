"use client";

import { Box, Grid, Rating, Typography } from "@mui/material";
import Image from "next/image";
import { type IFullCombination } from "~/models/ICombination";
import { theme } from "~/styles/theme/theme";

interface Props {
  combo: IFullCombination;
  toplistNum: number;
}

export const ToplistCombo = ({ combo, toplistNum }: Props) => {
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          background: theme.palette.custom.custom,
          fontWeight: "bold",
          p: 2,
        }}
      >
        {toplistNum}. {combo.name}
      </Typography>
      <Grid
        container
        justifyContent="center"
        sx={{ background: theme.palette.custom.custom }}
      >
        <Grid
          item
          xs={6}
          sm={3}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={combo.chip.imgUrl}
            width={50}
            height={83.333}
            style={{ height: "auto" }}
            alt={combo.chip.name + " - " + combo.chip.flavor}
          />
          <Typography sx={{ textAlign: "center" }}>
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
          justifyContent="center"
          alignItems="center"
        >
          {combo.dip.imgUrl !== "/none" ? (
            <Image
              src={combo.dip.imgUrl}
              width={40}
              height={83.333}
              style={{ height: "auto" }}
              alt={combo.dip.name + " - " + combo.dip.flavor}
            />
          ) : (
            ""
          )}
          <Typography sx={{ textAlign: "center" }}>
            {combo.dip.name} <br /> {combo.dip.flavor}
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: theme.palette.custom.custom,
          p: 2,
        }}
      >
        <Rating
          name="rating-read"
          defaultValue={combo.rating}
          precision={0.5}
          readOnly
        />
      </Box>
    </>
  );
};
