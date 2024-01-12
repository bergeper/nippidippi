"use client";

import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { type IFullCombination } from "~/models/ICombination";

import { theme } from "~/styles/theme/theme";
import { RateCombo } from "./RateCombo";

interface Props {
  combos: IFullCombination[];
}

export const UserCombosList = ({ combos }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [comboId, setComboId] = useState<string>("");

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
          background: theme.palette.custom.custom,
          [theme.breakpoints.up("sm")]: {
            height: "auto",
            justifyContent: "center",
            width: "40%",
            borderRadius: "4px",
            mt: 5,
            p: 2,
          },
        }}
      >
        <Typography
          color="inherit"
          variant="h1"
          sx={{ fontSize: "1.34rem", textAlign: "center", pt: 2, pb: 2 }}
        >
          The combinations you tested so far
        </Typography>
        <Typography sx={{ fontSize: "1.125rem", textAlign: "center", px: 2 }}>
          Here you can either check it out again or give it a rating, so other
          users and check which is the most popular one!
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", mt: 4 }}
      >
        <TableContainer
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Table
            sx={{
              maxWidth: 800,
              background: theme.palette.custom.custom,
              borderRadius: "4px",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Combo</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Chip
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Dip
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Rating
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {combos.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    {row.chip.name}
                    <br />
                    {row.chip.flavor}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    {row.dip.name}
                    <br />
                    {row.dip.flavor}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    {row.rating}
                    <br />
                    <Button
                      color="inherit"
                      onClick={() => {
                        setOpen(!open);
                        setComboId(row.id);
                      }}
                      sx={{
                        background: "white",
                        padding: "5px 5px",
                        borderRadius: "25px",
                      }}
                    >
                      Rate
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <RateCombo isOpen={open} isDialogOpen={setOpen} comboId={comboId} />
    </>
  );
};
