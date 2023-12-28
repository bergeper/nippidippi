"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { CombinationModal } from "./CombinationModal";
import { type ICombination } from "~/models/ICombination";
import { trpcApi } from "~/server/trpc/proxyTRPC";
import { defaultCombo } from "~/models/DefaultObject";

interface Props {
  combo: {
    id: string;
    comboNr: string;
    name: string;
    chipId: string;
    dipId: string;
    rating: number;
  };
}

export const TopList = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [combo, setCombo] = useState<ICombination>(defaultCombo);

  const dataForModal = async (comboNr: string) => {
    const response = await trpcApi.combination.getCombo.query({
      comboNr: comboNr,
    });
    console.log("2");
    if (response) {
      setCombo(response);
      setOpenModal(!openModal);
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <Box onClick={() => dataForModal(props.combo.comboNr)}>
        <Typography>{props.combo.name}</Typography>
        <Typography>{props.combo.comboNr}</Typography>
        <Typography>{props.combo.rating}</Typography>
      </Box>
      <CombinationModal
        combo={combo}
        isModalOpen={openModal}
        setIsModalOpen={setOpenModal}
      />
    </>
  );
};
