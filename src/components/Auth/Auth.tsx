"use client";

import { useState } from "react";
import { SignInModal } from "./SignIn/SignInModal";
import { SignUpModal } from "./SignUp/SignUpModal";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import { SignOutModal } from "./SignOut/SignOutModal";

export const Auth = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignOutOpen, setIsSignOutOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <>
      <Button variant="outlined" onClick={() => setIsSignInOpen(true)}>
        LOG IN
      </Button>
      <Button variant="contained" onClick={() => setIsSignUpOpen(true)}>
        SIGN UP
      </Button>
      <Button variant="contained" onClick={() => setIsSignOutOpen(true)}>
        SIGN OUT
      </Button>
      <SignUpModal
        isModalOpen={isSignUpOpen}
        setIsSignUpOpen={setIsSignUpOpen}
      />
      <SignInModal
        isModalOpen={isSignInOpen}
        setIsSignInOpen={setIsSignInOpen}
      />
      <SignOutModal
        isModalOpen={isSignOutOpen}
        setIsSignOutOpen={setIsSignOutOpen}
      />
      {session && <p>{JSON.stringify(session)}</p>}
    </>
  );
};
