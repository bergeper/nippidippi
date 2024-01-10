import { Box, Typography } from "@mui/material";
import { theme } from "~/styles/theme/theme";

interface Props {
  comboName: string;
}

export const ComboTitle = ({ comboName }: Props) => {
  return (
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
          width: "40%",
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
        }}
      >
        {comboName}
      </Typography>
    </Box>
  );
};
