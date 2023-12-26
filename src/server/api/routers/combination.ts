import { db } from "~/server/db";
import { publicProcedure, router } from "../trpc";
import { z } from "zod";

const getComboInput = z.object({
  comboNr: z.string(),
});

export const combinationRouter = router({
  getCombo: publicProcedure.input(getComboInput).query(async ({ input }) => {
    const combo = await db.combination.findUnique({
      where: {
        comboNr: input.comboNr,
      },
      include: { chip: true, dip: true },
    });
    return combo;
  }),
});
