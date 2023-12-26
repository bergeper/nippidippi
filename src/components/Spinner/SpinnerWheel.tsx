"use client";

import { Button } from "@mui/material";
import { useState } from "react";
import { type ICombination } from "~/models/ICombination";
import { trpcApi } from "~/server/trpc/proxyTRPC";

export const SpinnerWheel = () => {
  const [combo, setCombo] = useState<ICombination | null>();

  const getCombo = async () => {
    const response = await trpcApi.combination.getCombo.query({ comboNr: "8" });
    setCombo(response);
  };

  return (
    <>
      <Button onClick={getCombo}>Spin the wheel</Button>
      {JSON.stringify(combo)}
    </>
  );
};
