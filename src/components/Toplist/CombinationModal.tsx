"use client";

import { Box, Modal } from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { type ICombination } from "~/models/ICombination";

interface Props {
  combo?: ICombination;
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
            maxWidth: "800px",
            minHeight: "1000px",
            backgroundColor: "whitesmoke",
            borderRadius: 2,
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
            {props.combo?.chip && <p>{props.combo?.chip.flavor}</p>}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            voluptatum non nemo aliquam nesciunt eos assumenda dolor, amet vero
            praesentium sequi aspernatur, porro ducimus quae, quas harum ipsa.
            Expedita, exercitationem.
          </Box>
        </Box>
      </Modal>
    </>
  );
};
