import { z } from "zod";

import { publicProcedure, router } from "~/server/api/trpc";
import { db } from "~/server/db";

const createUserInput = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

export const userRouter = router({
  createUser: publicProcedure
    .input(createUserInput)
    .mutation(async ({ input }) => {
      console.log("USER");
      const newUser = await db.user.create({
        data: {
          username: input.username,
          email: input.email,
          password: input.password,
        },
      });
      // Add check if user exits in db
      return {
        user: newUser,
      };
    }),
});
