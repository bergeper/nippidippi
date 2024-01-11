"use client";

import { Box, Typography } from "@mui/material";
import { theme } from "~/styles/theme/theme";

export const AboutPageInfo = () => {
  return (
    <Box
      sx={{
        mb: 5,
        p: 1,
        width: "100%",
        background: theme.palette.custom.custom,
        [theme.breakpoints.up("sm")]: {
          mt: 10,
          width: "50%",
          borderRadius: "4px",
        },
        [theme.breakpoints.up("md")]: {
          width: "40%",
        },
      }}
    >
      <Typography sx={{ px: 2, pt: 2, fontWeight: "bold" }}>
        Hi there!
      </Typography>
      <Typography sx={{ p: 2 }}>
        Here you can read abit more about this website or if you need to get in
        touch with us you'll find all the info you need below.
      </Typography>
    </Box>
  );
};
