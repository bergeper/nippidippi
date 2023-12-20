"use client";

import { useState } from "react";
import { SignInModal } from "./SignIn/SignInModal";
import { SignUpModal } from "./SignUp/SignUpModal";
import { Button } from "@mui/material";

export const Auth = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setIsSignInOpen(true)}>
        LOG IN
      </Button>
      <Button variant="contained" onClick={() => setIsSignUpOpen(true)}>
        SIGN UP
      </Button>
      <SignUpModal
        isModalOpen={isSignUpOpen}
        setIsSignUpOpen={setIsSignUpOpen}
      />
      <SignInModal
        isModalOpen={isSignInOpen}
        setIsSignInOpen={setIsSignInOpen}
      />
    </>
  );
};
