"use client";

import { Box, Divider, Typography } from "@mui/material";
import { theme } from "~/styles/theme/theme";
import { ContactInfo } from "../Info/ContactInfo";

export const Contact = () => {
  return (
    <Box
      sx={{
        my: 5,
        p: 1,
        height: "auto",
        background: theme.palette.custom.custom,
        [theme.breakpoints.up("sm")]: {
          m: 2.5,
          mt: 10,
          borderRadius: "4px",
        },
      }}
    >
      <Typography sx={{ p: 2, fontWeight: "bold" }}>
        If you wish to get in contact with us. Please use either email or
        socialmedias!
      </Typography>
      <Divider />
      <ContactInfo />
    </Box>
  );
};
