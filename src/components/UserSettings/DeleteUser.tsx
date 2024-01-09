"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { theme } from "~/styles/theme/theme";

const DeleteSchema = z.object({
  username: z.string(),
  email: z.string().email("Please enter a valid email."),
});

type DeleteValues = z.infer<typeof DeleteSchema>;
export const DeleteUser = () => {
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
            width: "40%",
            borderRadius: "4px",
          },
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
          <TextField
            required
            // id="outlined-required"
            label="Username"
            defaultValue="Your discord username..."
            {...register("username")}
            onChange={(e) => {
              setValue("username", e.target.value);
              void trigger("username");
            }}
            helperText={errors.username?.message}
            error={Boolean(errors.username)}
          />
          <TextField
            required
            // id="outlined-required"
            label="Email"
            type="text"
            defaultValue="Your discord email..."
            {...register("email")}
            onChange={(e) => {
              setValue("email", e.target.value);
              void trigger("email");
            }}
            helperText={errors.email?.message}
            error={Boolean(errors.email)}
          />
          <Button type="submit" variant="outlined">
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
