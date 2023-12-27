"use client";

import { Button, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { type ICombination } from "~/models/ICombination";
import { trpcApi } from "~/server/trpc/proxyTRPC";
import RouletteWheel from "public/images/roulette-wheel.png";

export const SpinnerWheel = () => {
  const [combo, setCombo] = useState<ICombination>();
  const [error, setError] = useState<string>();
  const { data: session } = useSession();

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
    if (response) {
      setCombo(response);
    } else {
      setError("Something went wrong");
    }
  };

  const saveResult = async () => {
    console.log(combo);
  };

  return (
    <>
      <Typography variant="h4">Spin the wheel and see what you get!</Typography>
      <Image
        src={RouletteWheel}
        width={350}
        alt="Spinner wheel"
        onClick={getCombo}
      />

      {JSON.stringify(combo?.name)}
      {error}
      {session && <Button onClick={saveResult}>Save Result</Button>}
    </>
  );
};
