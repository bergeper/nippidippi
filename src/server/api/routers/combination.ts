import { db } from "~/server/db";
import { createTRPCRouter } from "../trpc";
import { z } from "zod";

const input = z.object({
  name: z.string(),
  flavor: z.string(),
});

export const combinationRouter = createTRPCRouter({
  // rateCombo: protectedProcedure.query(async ({ input }) => {
  //   const newChip = await db.combination.create({
  //     data: {
  //       name: "Pers Umami",
  //       chip: { connect: { id: "738a925a-aa7d-466a-878b-f3e3cef89f26" } },
  //       dip: { connect: { id: "ce1c73c3-f18c-4954-8013-d489f584dca0" } },
  //       rating: 0,
  //     },
  //     include: { chip: true, dip: true },
  //   });
  //   return newChip;
  // }),
});
