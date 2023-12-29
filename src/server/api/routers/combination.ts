import { db } from "~/server/db";
import { loggedInProcedure, publicProcedure, router } from "../trpc";
import { z } from "zod";
import { Prisma } from "@prisma/client";

const getComboInput = z.object({
  comboNr: z.string(),
});
const comboId = z.object({
  comboId: z.string(),
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
  getRandomCombo: publicProcedure.query(async () => {
    const combos = await db.combination.findMany({
      select: { comboNr: true },
    });
    const randomComboIndex = Math.floor(Math.random() * combos.length);
    const randomComboNr = combos[randomComboIndex];
    if (randomComboNr) {
      const randomCombo = await db.combination.findUnique({
        where: {
          comboNr: randomComboNr.comboNr,
        },
        include: { chip: true, dip: true },
      });
      return randomCombo;
    }
  }),
  saveCombo: loggedInProcedure.input(comboId).mutation(async (opts) => {
    const { ctx, input } = opts;
    const saveCombo = await ctx.db.triedCombination.create({
      data: {
        user: { connect: { id: ctx.session.user.id } },
        combination: { connect: { id: input.comboId } },
      },
    });
    return saveCombo;
  }),
  getTopCombos: publicProcedure.query(async () => {
    const combos = await db.combination.findMany({
      take: 10,
      orderBy: {
        rating: Prisma.SortOrder.desc,
      },
    });

    return combos;
  }),
});
