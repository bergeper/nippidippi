"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { redirect } from "next/navigation";
import { type Dispatch, type SetStateAction } from "react";
import { trpcApi } from "~/server/trpc/proxyTRPC";
import { theme } from "~/styles/theme/theme";

interface Props {
  isOpen: boolean;
  isDialogOpen: Dispatch<SetStateAction<boolean>>;
}
export const AcceptDeleteUser = ({ isOpen, isDialogOpen }: Props) => {
  const handleDelete = async () => {
    const response = await trpcApi.user.deleteUser.query();
    console.log(response);
    if (response) {
      redirect("/");
    }
  };
  return (
    <>
      <Dialog open={isOpen} onClose={() => isDialogOpen(false)}>
        <DialogTitle sx={{ background: theme.palette.custom.custom }}>
          {"Delete your account"}
        </DialogTitle>
        <DialogContent sx={{ background: theme.palette.custom.custom }}>
          <Typography>
            You are about too delete your account, are you really sure?
            <br />
            You will be missed. 😢
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            background: theme.palette.custom.custom,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pb: 2,
          }}
        >
          <Button
            color="inherit"
            onClick={() => {
              isDialogOpen(false);
            }}
            sx={{
              background: "white",
              padding: "5x 5px",
              borderRadius: "25px",
            }}
          >
            I regret it!
          </Button>
          <Button
            color="warning"
            onClick={() => {
              isDialogOpen(false);
              void handleDelete();
            }}
            sx={{
              background: "black",
              padding: "5x 5px",
              borderRadius: "25px",
            }}
          >
            Delete Account
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
