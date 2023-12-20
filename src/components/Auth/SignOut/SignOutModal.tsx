import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { type Dispatch, type SetStateAction } from "react";

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
          width: "66%",
          height: "80%",
          bgcolor: "background.paper",
          borderRadius: 2,
        }}
      >
        <CloseRoundedIcon
          sx={{
            position: "absolute",
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
          SignFields here!
        </Box>
      </Box>
    </Modal>
  );
};
