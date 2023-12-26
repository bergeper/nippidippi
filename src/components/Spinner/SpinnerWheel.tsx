"use client";

import { Button } from "@mui/material";
import { useState } from "react";
import { type ICombination } from "~/models/ICombination";
import { trpcApi } from "~/server/trpc/proxyTRPC";

export const SpinnerWheel = () => {
  const [combo, setCombo] = useState<ICombination | null>();
  const [error, setError] = useState<string>();

  // const getCombo = async () => {
  //   const combosLength = await trpcApi.combination.getCombosLength.query();
  //   const randomComboIndex = Math.floor(Math.random() * combosLength.length);
  //   const randomCombo = combosLength[randomComboIndex];
  //   if (randomCombo) {
  //     const response = await trpcApi.combination.getCombo.query({
  //       comboNr: randomCombo?.comboNr,
  //     });
  //     setCombo(response);
  //   } else {
  //     console.log("What went wrong?");
  //     setError("Something went wrong");
  //   }
  // };

  const getCombo = async () => {
    const response = await trpcApi.combination.getRandomCombo.query();
    setCombo(response);
  };

  return (
    <>
      <Button onClick={getCombo}>Spin the wheel</Button>
      {JSON.stringify(combo?.name)}
      {error}
    </>
  );
};
