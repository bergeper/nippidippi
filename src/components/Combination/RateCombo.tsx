"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Select,
  MenuItem,
  type SelectChangeEvent,
  Button,
  InputLabel,
  Box,
} from "@mui/material";
import { type Dispatch, type SetStateAction, useState } from "react";
import { trpcApi } from "~/server/trpc/proxyTRPC";
import { theme } from "~/styles/theme/theme";

interface Props {
  isOpen: boolean;
  isDialogOpen: Dispatch<SetStateAction<boolean>>;
  comboId: string;
}

export const RateCombo = ({ comboId, isOpen, isDialogOpen }: Props) => {
  const [rating, setRating] = useState<string>("");

  const handleSetRating = (event: SelectChangeEvent) => {
    setRating(event.target.value);
  };

  const handleSaveClick = async () => {
    await trpcApi.combination.rateCombo.mutate({
      rating: +rating,
      comboId: comboId,
    });
    console.log(rating, " ", comboId);
  };

  return (
    <>
      <Dialog open={isOpen} onClose={() => isDialogOpen(false)}>
        <DialogTitle sx={{ background: theme.palette.custom.custom }}>
          {"Rate the combination!"}
        </DialogTitle>
        <DialogContent sx={{ background: theme.palette.custom.custom }}>
          <Typography>
            You can give it a rating between one and five.
            <br />
            If you already rated a combination you can update the rating, by
            giving it a rating once again.
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{ background: theme.palette.custom.custom, display: "flex" }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
            }}
          >
            <InputLabel id="rating-select-label">Rating</InputLabel>
            <Select
              labelId="rating-select-label"
              id="rating-select"
              value={rating}
              label="Rating"
              onChange={handleSetRating}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
            <Button
              color="inherit"
              onClick={() => {
                isDialogOpen(false);
                void handleSaveClick();
              }}
              sx={{
                background: "white",
                padding: "5x 5px",
                borderRadius: "25px",
              }}
            >
              Save Rating!
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};
