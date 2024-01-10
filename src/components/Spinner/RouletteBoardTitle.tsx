import { Box, Typography } from "@mui/material";
import { theme } from "~/styles/theme/theme";

export const RouletteBoardTitle = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        // position: "absolute",
        display: "flex",
        flexDirection: "column",
        background: theme.palette.custom.custom,
        pt: 2,
        // mt: -1,
        [theme.breakpoints.up("sm")]: {
          px: 4,
          mt: 2,
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
          fontSize: "0.9rem",
          fontWeight: "bold",
          textAlign: "center",
          py: 1,
          [theme.breakpoints.up("sm")]: {
            fontSize: "1.3rem",
          },
        }}
      >
        Give the wheel a push! (press it)
      </Typography>
    </Box>
  );
};
