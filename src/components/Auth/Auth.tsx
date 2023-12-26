"use client";

import { useState } from "react";
import { SignInModal } from "./SignIn/SignInModal";
import { SignUpModal } from "./SignUp/SignUpModal";
import { MenuItem } from "@mui/material";
import { useSession } from "next-auth/react";
import { SignOutModal } from "./SignOut/SignOutModal";

export const Auth = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignOutOpen, setIsSignOutOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <>
      {!session && (
        <>
          <MenuItem onClick={() => setIsSignInOpen(true)}>Sign In</MenuItem>
          <MenuItem onClick={() => setIsSignUpOpen(true)}>Sign Up</MenuItem>
        </>
      )}

      {session && (
        <MenuItem onClick={() => setIsSignOutOpen(true)}>Sign out</MenuItem>
      )}
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
    </>
  );
};
