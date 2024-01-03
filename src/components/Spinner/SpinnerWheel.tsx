"use client";

import { Button, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { type ICombination } from "~/models/ICombination";
import { trpcApi } from "~/server/trpc/proxyTRPC";
import RouletteWheel from "public/images/roulette-wheel.png";
import { ShowCombo } from "../Combination/ShowCombo";

export const SpinnerWheel = () => {
  const [combo, setCombo] = useState<ICombination>();
  const [error, setError] = useState<string>();
  const { data: session } = useSession();

  const getCombo = async () => {
    if (session) {
      const response =
        await trpcApi.combination.getRandomComboIfLoggedIn.query();
      if (response) {
        setCombo(response);
      } else {
        setError("Something went Wrong");
      }
    } else {
      const response = await trpcApi.combination.getRandomCombo.query();
      if (response) {
        setCombo(response);
      } else {
        setError("Something went wrong");
      }
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

  return (
    <>
      <Typography variant="h4" sx={{ fontSize: "1.5rem" }}>
        Spin the wheel and see what you get!
      </Typography>
      <Image
        src={RouletteWheel}
        width={250}
        alt="Spinner wheel"
        onClick={getCombo}
      />

      {combo && <ShowCombo combo={combo} />}
      {error}
      {session && combo && (
        <Button onClick={() => saveResult(combo.id)}>Save Result</Button>
      )}
    </>
  );
};
