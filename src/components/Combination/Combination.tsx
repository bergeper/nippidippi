import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { type IFullCombination } from "~/models/ICombination";
import { theme } from "~/styles/theme/theme";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

interface Props {
  combo: IFullCombination;
}

export const Combination = ({ combo }: Props) => {
  return <></>;
};
/*
<Card
        sx={{
          width: "100%",
          background: theme.palette.custom.custom,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2.5,
          m: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {combo.name}
        </Typography>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            width: "100%",
            p: 2,
          }}
        >
          <Box>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={combo.rating}
                precision={0.5}
                readOnly
              />
            </Stack>
          </Box>
          <Button
            color="inherit"
            sx={{
              background: "white",
              padding: "10px 20px",
              borderRadius: "25px",
              fontSize: "1rem",
            }}
          >
            Combo
          </Button>
          <Button
            color="inherit"
            sx={{
              background: "white",
              padding: "10px 20px",
              borderRadius: "25px",
              fontSize: "1rem",
            }}
          >
            Rate
          </Button>
        </CardContent>
      </Card>

*/
