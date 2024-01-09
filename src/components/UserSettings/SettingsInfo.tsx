"use client";

import { Box, Typography } from "@mui/material";
import { theme } from "~/styles/theme/theme";

export const SettingsInfo = () => {
  return (
    <>
      <Box
        component="article"
        sx={{
          width: "auto",
          display: "flex",
          flexDirection: "column",
          background: theme.palette.custom.custom,
          py: 2,
          px: 4,
          [theme.breakpoints.up("sm")]: {
            mt: 5,
            height: "auto",
            alignContent: "center",
            justifyContent: "center",
            width: "40%",
            borderRadius: "4px",
          },
        }}
      >
        <Typography
          color="inherit"
          variant="h1"
          sx={{ fontSize: "1.34rem", textAlign: "center", pt: 2, pb: 2 }}
        >
          Your Settings
        </Typography>
        <Typography color="inherit" variant="h4" sx={{ fontSize: "1.225rem" }}>
          The only thing you can do here is delete your account. But keep in
          mind, if you delete your account. All of your ratings and data will be
          lost forever.
        </Typography>
      </Box>
    </>
  );
};
