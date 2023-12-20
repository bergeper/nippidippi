import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { type Dispatch, type SetStateAction } from "react";
import { signOut } from "next-auth/react";

interface Props {
  isModalOpen: boolean;
  setIsSignOutOpen: Dispatch<SetStateAction<boolean>>;
}

export const SignOutModal = (props: Props) => {
  return (
    <Modal
      style={{
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={props.isModalOpen}
    >
      <Box
        sx={{
          position: "relative" as const,
          width: "300px",
          height: "400px",
          backgroundColor: "#1f1e1e",
          borderRadius: 2,
        }}
      >
        <CloseRoundedIcon
          sx={{
            position: "absolute",
            color: "white",
            fontSize: 42,
            right: 10,
            top: 10,
            ":hover": {
              cursor: "pointer",
            },
          }}
          color="disabled"
          onClick={() => props.setIsSignOutOpen(false)}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Button
            type="submit"
            variant="outlined"
            fullWidth
            sx={{
              height: 42,
              padding: 3,
            }}
            onClick={() => signOut()}
          >
            LOG OUT
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
