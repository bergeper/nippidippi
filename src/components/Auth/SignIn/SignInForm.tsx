import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Link, styled, TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    fieldset {
      border-color: #ffffff;
    }
  }
`;

const SignInSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Username must contain atleast 5 characters" }),
  password: z
    .string()
    .min(6, { message: "Password must contain atleast 8 characters" }),
});

type SignUpValues = z.infer<typeof SignInSchema>;

export const SignInForm = () => {
  const {
    register,
    formState: { errors },
    trigger,
    setValue,
    handleSubmit,
  } = useForm<SignUpValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = async (data: SignUpValues) => {
    try {
      await signIn("credentials", {
        email: data.email,
        password: data.password,
      });
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
            <Link
              sx={{
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                mt: 2,
                color: "white",
              }}
            >
              Forgot Password?
            </Link>
          </Box>
          <Button
            type="submit"
            variant="outlined"
            fullWidth
            sx={{
              height: 45,
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </>
  );
};
