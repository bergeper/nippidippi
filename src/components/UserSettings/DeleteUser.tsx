"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { type FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { trpcApi } from "~/server/trpc/proxyTRPC";
import { theme } from "~/styles/theme/theme";
import { AcceptDeleteUser } from "./AcceptDeleteUser";

const DeleteSchema = z.object({
  username: z
    .string()
    .min(1, "Discord usernames can only be between 1-32 characters long")
    .max(32, "Discord usernames can only be between 1-32 characters long"),
  email: z.string().email("Please enter a valid email."),
});

type DeleteValues = z.infer<typeof DeleteSchema>;
export const DeleteUser = () => {
  const [checkUser, setCheckUser] = useState<boolean>(true);
  const [openCheck, setOpenCheck] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    trigger,
    setValue,
    handleSubmit,
  } = useForm<DeleteValues>({
    defaultValues: {
      username: "",
      email: "",
    },
    resolver: zodResolver(DeleteSchema),
  });

  const onSubmit = async (data: DeleteValues) => {
    const response = await trpcApi.user.checkUser.mutate({
      username: data.username,
      email: data.email,
    });
    setCheckUser(response.userInfoCorrect);
    if (response) {
      setOpenCheck(response.userInfoCorrect);
    }
  };
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="article"
        sx={{
          width: "100%",
          background: theme.palette.custom.custom,
          mt: 5,
          py: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          [theme.breakpoints.up("sm")]: {
            height: "auto",
            alignContent: "center",
            justifyContent: "center",
            width: "60%",
            borderRadius: "4px",
            p: 4,
          },
          [theme.breakpoints.up("md")]: {
            height: "auto",
            alignContent: "center",
            justifyContent: "center",
            width: "40%",
            borderRadius: "4px",
          },
        }}
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          void handleSubmit(onSubmit)(e);
        }}
      >
        <Typography sx={{ py: 2, px: 4 }}>
          Enter your Discord username and email...
          <br />
          ...to delete your account 😢
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {!checkUser && (
            <Box
              sx={{
                width: "60%",
              }}
            >
              <Typography
                sx={{
                  mb: 2,
                  p: 2,
                  backgroundColor: "rgba(251, 10, 10, 0.573)",
                }}
              >
                Lucky you, you enter the wrong info.
                <br /> If you still want to delete your account, please provide
                the correct username and email.
              </Typography>
            </Box>
          )}
          <TextField
            required
            label="Username"
            defaultValue="Your discord username..."
            {...register("username")}
            onChange={(e) => {
              setValue("username", e.target.value);
              void trigger("username");
            }}
            error={Boolean(errors.username)}
          />
          <FormHelperText>
            <Typography variant="caption" sx={{ color: "black" }}>
              {errors.username?.message}
            </Typography>
          </FormHelperText>
          <TextField
            required
            label="Email"
            type="text"
            defaultValue="Your discord email..."
            {...register("email")}
            onChange={(e) => {
              setValue("email", e.target.value);
              void trigger("email");
            }}
            error={Boolean(errors.email)}
          />
          <FormHelperText>
            <Typography variant="caption" sx={{ color: "black" }}>
              {errors.email?.message}
            </Typography>
          </FormHelperText>
          <Button type="submit" variant="outlined">
            Delete
          </Button>
        </Box>
      </Box>
      <AcceptDeleteUser isOpen={openCheck} isDialogOpen={setOpenCheck} />
    </Box>
  );
};
