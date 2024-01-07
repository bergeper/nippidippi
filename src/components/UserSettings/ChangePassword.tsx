"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { trpcApi } from "~/server/trpc/proxyTRPC";

const UpdatePasswordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Password must contain atleast 8 characters" }),
});

type UpdatePasswordValues = z.infer<typeof UpdatePasswordSchema>;

export const ChangePassword = () => {
  const {
    register,
    formState: { errors },
    trigger,
    setValue,
    handleSubmit,
  } = useForm<UpdatePasswordValues>({
    defaultValues: {
      password: "",
    },
    resolver: zodResolver(UpdatePasswordSchema),
  });

  const onSubmit = async (data: UpdatePasswordValues) => {
    try {
      await trpcApi.user.updatePassword.mutate({ password: data.password });
      console.log(data);
    } catch (error) {
      console.log("error!", error);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: 4,
      }}
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit(onSubmit)(e);
      }}
    >
      <TextField
        InputLabelProps={{ shrink: true }}
        sx={{
          input: { color: "white", borderColor: "#ffffff" },
          label: { color: "white", borderColor: "#ffffff" },
        }}
        variant="outlined"
        type="password"
        size="small"
        label="Password"
        fullWidth
        {...register("password")}
        onChange={(e) => {
          setValue("password", e.target.value);
          void trigger("password");
        }}
        helperText={errors.password?.message}
        error={Boolean(errors.password)}
      />
    </Box>
  );
};
