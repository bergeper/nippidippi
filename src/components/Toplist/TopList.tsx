"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { CombinationModal } from "./CombinationModal";
import { type ICombination } from "~/models/ICombination";

interface Props {
  combo: ICombination;
}

export const TopList = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Box onClick={() => setOpenModal(!openModal)}>
        <Typography>{props.combo.name}</Typography>
        <Typography>{props.combo.comboNr}</Typography>
        <Typography>{props.combo.rating}</Typography>
      </Box>
      <CombinationModal
        combo={props.combo}
        isModalOpen={openModal}
        setIsModalOpen={setOpenModal}
      />
    </>
  );
};
