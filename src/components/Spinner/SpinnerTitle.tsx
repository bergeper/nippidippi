"use client";

import { Box, Typography } from "@mui/material";

export const SpinnerTitle = () => {
  const archBox = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: 2,
  };

  const archText = {
    fontSize: "1.2rem",
  };
  return (
    <Box sx={archBox}>
      <Typography variant="h4" sx={archText}>
        Press the wheel and see what you get!
      </Typography>
    </Box>
  );
};
