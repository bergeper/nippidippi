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
    const existingCombo = await ctx.db.triedCombination.findFirst({
      where: {
        user: { id: ctx.session.user.id },
        combination: { id: input.comboId },
      },
    });

    if (!existingCombo) {
      const saveCombo = await ctx.db.triedCombination.create({
        data: {
          user: { connect: { id: ctx.session.user.id } },
          combination: { connect: { id: input.comboId } },
        },
      });
      return saveCombo;
    } else {
      console.log("combo already saved ❤️❤️❤️❤️❤️❤️🚀🚀🚀🚀⚠️⚠️⚠️⚠️");
      // send back better request
      return existingCombo;
    }
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

  // Fix so route is protected
  getTestedCombinations: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async (opts) => {
      const { ctx, input } = opts;
      console.log(opts.ctx.session?.user.id);
      const testedCombos = await ctx.db.triedCombination.findMany({
        where: { user: { id: input.userId } },
        include: {
          combination: true,
        },
      });

      return testedCombos;
    }),
  rateCombo: loggedInProcedure
    .input(
      z.object({
        rating: z.number(),
        comboId: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { ctx, input } = opts;

      const newRating = await ctx.db.rating.create({
        data: {
          rating: input.rating,
          user: { connect: { id: ctx.session.user.id } },
          combination: { connect: { id: input.comboId } },
        },
      });

      // Check if user has already RATED the combination

      const comboToRate = await db.combination.findUnique({
        where: { id: input.comboId },
        include: { ratings: true },
      });

      if (comboToRate) {
        const newRatings =
          (comboToRate.rating * comboToRate.ratings.length + input.rating) /
          (comboToRate.ratings.length + 1);

        const updatedCombo = await db.combination.update({
          where: { id: input.comboId },
          data: {
            rating: newRatings,
          },
        });

        return updatedCombo;
      }
    }),
});
