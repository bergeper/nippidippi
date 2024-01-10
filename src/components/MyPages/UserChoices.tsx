"use client";

import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { theme } from "~/styles/theme/theme";

export const UserChoices = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        [theme.breakpoints.up("md")]: {
          flexDirection: "row",
        },
      }}
    >
      <Card
        sx={{
          maxWidth: 300,
          height: 220,
          background: theme.palette.custom.custom,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2.5,
          m: 2,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            p: 2,
          }}
        >
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "bold", textAlign: "center" }}
          >
            Rate Results
          </Typography>
          <Typography sx={{ fontSize: "1.125rem", textAlign: "center" }}>
            If you like a combination, please go and rate it so other users can
            see what the favourite combination is!
          </Typography>
          <Button
            color="inherit"
            href="/my-pages/results"
            sx={{
              background: "white",
              padding: "10px 20px",
              borderRadius: "25px",
              fontSize: "1rem",
            }}
          >
            The Combos you tested
          </Button>
        </CardContent>
      </Card>
      <Card
        sx={{
          maxWidth: 300,
          height: 220,
          background: theme.palette.custom.custom,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2.5,
          m: 2,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            p: 2,
          }}
        >
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "bold", textAlign: "center" }}
          >
            Settings
          </Typography>
          <Typography sx={{ fontSize: "1.125rem", textAlign: "center" }}>
            If you want to change your settings, such as deleting your account,
            be ware. All your ratings will be lost.
          </Typography>
          <Button
            color="inherit"
            href="/my-pages/settings"
            sx={{
              background: "white",
              padding: "10px 20px",
              borderRadius: "25px",
              fontSize: "1rem",
            }}
          >
            Your Settings
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
