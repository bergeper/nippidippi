"use client";

import { Box, Modal, Typography } from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { type ICombination } from "~/models/ICombination";
import { theme } from "~/styles/theme/theme";
import Image from "next/image";

interface Props {
  combo: ICombination;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const CombinationModal = (props: Props) => {
  return (
    <>
      <Modal
        style={{
          backdropFilter: "blur(4px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={props.isModalOpen}
      >
        <Box
          onBlur={() => props.setIsModalOpen(false)}
          sx={{
            position: "relative" as const,
            m: 2,
            width: "300px",
            minHeight: "400px",
            backgroundColor: "whitesmoke",
            borderRadius: 2,
            [theme.breakpoints.up("sm")]: {
              width: "400px",
            },
          }}
        >
          <CloseRoundedIcon
            sx={{
              position: "absolute",
              color: "black",
              fontSize: 42,
              right: 10,
              top: 10,
              ":hover": {
                cursor: "pointer",
              },
            }}
            color="disabled"
            onClick={() => props.setIsModalOpen(false)}
          />
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              pt: 10,
            }}
          >
            <Typography variant="h4">{props.combo.chip.name}</Typography>
            <Typography variant="h6">
              The chip flavor: {props.combo.chip.flavor}
            </Typography>
            <Image
              src={`${props.combo.chip.imgUrl}`}
              alt={props.combo.chip.flavor}
              width={250}
              height={400}
            />
            <Typography variant="h6">
              The dip flavor: {props.combo.dip.flavor}
            </Typography>
            {props.combo.dip.imgUrl !== "none" && (
              <Image
                src={`${props.combo.dip.imgUrl}`}
                alt={props.combo.dip.flavor}
                width={250}
                height={400}
              />
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
};
