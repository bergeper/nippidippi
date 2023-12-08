import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(z.object({ name: z.string(), password: z.string() }))
    .query(async ({ input }) => {
      const newUser = await db.user.create({
        data: {
          username: input.name,
          password: input.password,
        },
      });
      // Add check if user exits in db
      return {
        user: newUser,
      };
    }),
});
