import { Box, Grow, Typography } from "@mui/material";
import { theme } from "~/styles/theme/theme";

interface Props {
  comboName: string;
}

export const ComboTitle = ({ comboName }: Props) => {
  return (
    <Grow
      in={!!comboName}
      mountOnEnter
      unmountOnExit
      style={{ transitionDelay: `${1000}ms` }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          alignItems: "center",
          mt: 2,
          background: theme.palette.custom.bg,
          [theme.breakpoints.up("sm")]: {
            height: "auto",
            justifyContent: "center",
            // width: "40%",
            borderRadius: "4px",
            p: 2,
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "1rem",
            p: 2,
            fontWeight: "bold",
            fontStyle: "italic",
            textAlign: "center",
            [theme.breakpoints.up("sm")]: {
              fontSize: "1.3rem",
            },
          }}
        >
          {comboName}
        </Typography>
      </Box>
    </Grow>
  );
};
