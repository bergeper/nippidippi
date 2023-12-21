import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, styled, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { trpcApi } from "~/server/trpc/proxyTRPC";

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    fieldset {
      border-color: #ffffff;
    }
  }
`;

const SignUpSchema = z.object({
  username: z
    .string()
    .min(5, { message: "Username must contain atleast 5 characters" }),
  email: z.string().email("Please enter a valid email."),
  password: z
    .string()
    .min(6, { message: "Password must contain atleast 8 characters" }),
});

type SignUpValues = z.infer<typeof SignUpSchema>;

export const SignUpForm = () => {
  const {
    register,
    formState: { errors },
    trigger,
    setValue,
    handleSubmit,
  } = useForm<SignUpValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (data: SignUpValues) => {
    try {
      await trpcApi.user.createUser.mutate({
        username: data.username,
        email: data.email,
        password: data.password,
      });
      console.log(data);
    } catch (error) {
      console.log("error!", error);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 5,
        }}
      >
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
          <StyledTextField
            InputLabelProps={{ shrink: true }}
            {...register("email")}
            onChange={(e) => {
              setValue("email", e.target.value);
              void trigger("email");
            }}
            variant="outlined"
            sx={{
              input: { color: "white", borderColor: "#ffffff" },
              label: { color: "white", borderColor: "#ffffff" },
            }}
            type="text"
            size="small"
            label="Email"
            fullWidth
            helperText={errors.email?.message}
            error={Boolean(errors.email)}
          />
          <StyledTextField
            InputLabelProps={{ shrink: true }}
            {...register("username")}
            onChange={(e) => {
              setValue("username", e.target.value);
              void trigger("username");
            }}
            variant="outlined"
            sx={{
              input: { color: "white", borderColor: "#ffffff" },
              label: { color: "white", borderColor: "#ffffff" },
            }}
            type="text"
            size="small"
            label="Username"
            fullWidth
            helperText={errors.username?.message}
            error={Boolean(errors.username)}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <StyledTextField
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
          <Button
            type="submit"
            variant="outlined"
            fullWidth
            sx={{
              height: 45,
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </>
  );
};
