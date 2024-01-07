import { z } from "zod";

import { loggedInProcedure, publicProcedure, router } from "~/server/api/trpc";
import { db } from "~/server/db";

const createUserInput = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

const passwordInput = z.object({
  password: z.string(),
});
// FYI: If routes if you want to create a user or change PW
export const userRouter = router({
  createUser: publicProcedure
    .input(createUserInput)
    .mutation(async ({ input }) => {
      console.log("USER");
      const newUser = await db.user.create({
        data: {
          // username: input.username,
          email: input.email,
          // password: input.password,
        },
      });
      // Add check if user exits in db
      return {
        user: newUser,
      };
    }),
  updatePassword: loggedInProcedure
    .input(passwordInput)
    .mutation(async (opts) => {
      const { ctx, input } = opts;

      const updatePass = await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: {
          // password: input.password,
        },
      });
      return updatePass;
    }),
});
