"use client";

import { Avatar, Typography, Card, CardContent } from "@mui/material";
import { theme } from "~/styles/theme/theme";

interface Props {
  user: {
    id: string;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}
export const DisplayUser = ({ user }: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        background: theme.palette.custom.custom,
        p: 2.5,
        m: 2,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          alt={`${user.name}`}
          src={`${user.image}`}
          sx={{ width: 100, height: 100 }}
        />
        <Typography sx={{ fontSize: "1.25rem", fontWeight: "bold" }}>
          Hi, {user.name}!
        </Typography>
        <Typography sx={{ fontSize: "1.125rem", textAlign: "center" }}>
          Here you can choose between settings or rating your tested results.
        </Typography>
      </CardContent>
    </Card>
  );
};
