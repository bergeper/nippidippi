"use client";

import { Box, Typography } from "@mui/material";
import { theme } from "~/styles/theme/theme";
import { FooterContact } from "./FooterContact";
import { FooterLinks } from "./FooterLinks";

export const FooterContentHolder = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        background: "#EEE3AC",
        borderTop: "2px solid black",
        b: 0,
        pt: 2,
        pb: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 2,
          py: 2,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>NippiDIPPI</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
          mt: 2,
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 2,
            py: 2,
          }}
        >
          <FooterLinks />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 2,
            py: 2,
          }}
        >
          <FooterContact />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          pt: 2,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>© 2024 NippiDippi</Typography>
      </Box>
    </Box>
  );
};
