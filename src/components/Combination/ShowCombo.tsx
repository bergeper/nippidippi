import { Box, Typography } from "@mui/material";
import { type ICombination } from "~/models/ICombination";
import Image from "next/image";

interface Props {
  combo: ICombination;
}

export const ShowCombo = ({ combo }: Props) => {
  return (
    <>
      <Typography>{combo.name}</Typography>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "50%" }}>
          <Image
            src={combo.chip.imgUrl}
            width={125}
            height={166.66666}
            style={{
              height: "auto",
            }}
            alt={"auto"}
          />
          <Typography>{combo.chip.name}</Typography>
          <Typography>{combo.chip.flavor}</Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          {combo.dip.imgUrl !== "/" ? (
            <Image
              src={combo.dip.imgUrl}
              width={125}
              height={166.66666}
              style={{
                height: "auto",
              }}
              alt="test"
            />
          ) : (
            ""
          )}
          <Typography>{combo.dip.name}</Typography>
          <Typography>{combo.dip.flavor}</Typography>
        </Box>
      </Box>
    </>
  );
};
