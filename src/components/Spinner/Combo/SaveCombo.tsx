import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import {
  type Dispatch,
  type SetStateAction,
  type ReactElement,
  type Ref,
} from "react";
import { type TransitionProps } from "@mui/material/transitions";
import React from "react";
import { theme } from "~/styles/theme/theme";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  isOpen: boolean;
  isDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export const SaveCombo = ({ isOpen, isDialogOpen }: Props) => {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => isDialogOpen(false)}
    >
      <DialogTitle sx={{ background: theme.palette.custom.bg }}>
        {"This combo is saved!!!"}
      </DialogTitle>
      <DialogContent sx={{ background: theme.palette.custom.bg }}>
        <DialogContentText>
          You have saved this combination and can check it out and rate it on
          your pages!
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ background: theme.palette.custom.bg }}>
        <Button onClick={() => isDialogOpen(false)}>Ok, nice!</Button>
      </DialogActions>
    </Dialog>
  );
};
