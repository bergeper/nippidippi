import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { type IFullCombination } from "~/models/ICombination";

interface Props {
  combo: IFullCombination;
}

export const ShowCombo = ({ combo }: Props) => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontSize: "1.2rem",
          p: 2,
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        {combo.name}
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
            gap: 2,
            p: 1,
            position: "relative",
          }}
        >
          {combo.dip.imgUrl !== "/none" ? (
            <Image
              src={combo.chip.imgUrl}
              width={125}
              height={166.66666}
              style={{
                height: "auto",
                width: "100px",
                rotate: "-5deg",
              }}
              alt={"auto"}
            />
          ) : (
            " "
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{}}>
              {combo.chip.name}
            </Typography>
            <Typography variant="body1" sx={{}}>
              {combo.chip.flavor}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
            gap: 2,
            p: 1,
            position: "relative",
          }}
        >
          {combo.dip.imgUrl !== "/none" ? (
            <Image
              src={combo.dip.imgUrl}
              width={90}
              height={166.66666}
              style={{
                height: "auto",
                width: "80px",
                rotate: "5deg",
              }}
              alt={combo.dip.name + " " + combo.dip.flavor}
            />
          ) : (
            ""
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{}}>
              {combo.dip.name}
            </Typography>
            <Typography variant="body1" sx={{}}>
              {combo.dip.flavor}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
