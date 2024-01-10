import { Box, Typography } from "@mui/material";
import { theme } from "~/styles/theme/theme";

export const RouletteBoardTitle = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "auto",
        display: "flex",
        flexDirection: "column",
        background: theme.palette.custom.custom,
        py: 2,
        px: 2,
        [theme.breakpoints.up("sm")]: {
          mt: 5,
          px: 4,
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
        sx={{ fontSize: "1.3rem", textAlign: "center", pt: 2, pb: 2 }}
      >
        Press the wheel and see what you get!
      </Typography>
    </Box>
  );
};
