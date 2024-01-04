import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { SignInForm } from "./SignInForm";
import { type Dispatch, type SetStateAction } from "react";

interface Props {
  isModalOpen: boolean;
  setIsSignInOpen: Dispatch<SetStateAction<boolean>>;
}

export const SignInModal = (props: Props) => {
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
          backgroundColor: "#303030",
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
          onClick={() => props.setIsSignInOpen(false)}
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
          <SignInForm />
        </Box>
      </Box>
    </Modal>
  );
};
