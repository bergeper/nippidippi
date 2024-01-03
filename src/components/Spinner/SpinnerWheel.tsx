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

  const getCombo = async () => {
    const response = await trpcApi.combination.getRandomCombo.query();
    if (response) {
      setCombo(response);
    } else {
      setError("Something went wrong");
    }
  };

  const saveResult = async (id: string) => {
    const response = await trpcApi.combination.saveCombo.mutate({
      comboId: id,
    });

    if (response) {
      console.log(combo);
    } else {
      setError("Something went wrong");
    }
  };

  const rateResult = async (id: string) => {
    await trpcApi.combination.rateCombo.mutate({
      comboId: id,
      rating: 4,
    });
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

      {JSON.stringify(combo?.chip.flavor)}
      {error}
      {session && combo && (
        <>
          <Button onClick={() => saveResult(combo.id)}>Save Result</Button>
          <Button onClick={() => rateResult(combo.id)}>RATE IT</Button>
        </>
      )}
    </>
  );
};
