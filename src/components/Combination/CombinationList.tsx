"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { CombinationModal } from "./CombinationModal";
import { type ICombination } from "~/models/ICombination";
import { trpcApi } from "~/server/trpc/proxyTRPC";
import { defaultCombo } from "~/models/DefaultObject";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

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

export const CombinationList = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [combo, setCombo] = useState<ICombination>(defaultCombo);

  const dataForModal = async (comboNr: string) => {
    const response = await trpcApi.combination.getCombo.query({
      comboNr: comboNr,
    });
    if (response) {
      setCombo(response);
      setOpenModal(!openModal);
    } else {
    }
  };

  return (
    <>
      <Box onClick={() => dataForModal(props.combo.comboNr)}>
        <Typography variant="h5">{props.combo.name}</Typography>
        <Typography variant="h6">
          Combo Number: {props.combo.comboNr}
        </Typography>
        <Typography variant="h6">Rating: {props.combo.rating}</Typography>
        <Stack spacing={1}>
          {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
          <Rating
            name="half-rating-read"
            defaultValue={props.combo.rating}
            precision={0.5}
            readOnly
          />
        </Stack>
      </Box>
      <CombinationModal
        combo={combo}
        isModalOpen={openModal}
        setIsModalOpen={setOpenModal}
      />
    </>
  );
};
