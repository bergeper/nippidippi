"use client";

import { Box, Typography } from "@mui/material";
import { theme } from "~/styles/theme/theme";

export const ToplistTitle = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          width: "100%",
          // position: "absolute",
          display: "flex",
          flexDirection: "column",
          background: theme.palette.custom.custom,
          pt: 2,
          mb: 2,
          [theme.breakpoints.up("sm")]: {
            p: 4,
            my: 10,
            height: "auto",
            alignContent: "center",
            justifyContent: "center",
            width: "60%",
            borderRadius: "4px",
          },
          [theme.breakpoints.up("md")]: {
            width: "40%",
          },
        }}
      >
        <Typography
          color="inherit"
          variant="h1"
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            textAlign: "center",
            py: 1,
            [theme.breakpoints.up("sm")]: {
              fontSize: "1.3rem",
            },
          }}
        >
          NippiDippi's Toplist
        </Typography>
      </Box>
    </>
  );
};
