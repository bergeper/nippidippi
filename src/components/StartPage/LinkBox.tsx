import { Box, Card } from "@mui/material";
import { LinksStartPage } from "./LinksStartPage";
import { type ILinkText } from "~/models/ILinkText";
import { theme } from "~/styles/theme/theme";

export const LinkBox = () => {
  const textToSend: ILinkText[] = [
    {
      title: "Want to sign in?",
      body: "On this site you can sign in using Discord",
      link: "/api/auth/signin",
      linkText: "Sign In",
    },
    {
      title: "About us",
      body: "This site is awesome",
      link: "/about",
      linkText: "Go to About us",
    },
    {
      title: "The Roulette Wheel",
      body: "The Spinner will give you a random combination of chip n dip",
      link: "/spinner",
      linkText: "Go to Spinner",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        heigth: "100%",
        display: "flex",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      {textToSend.map((item, i) => (
        <Card
          key={i}
          sx={{
            mt: 20,
            width: "30%",
            background: theme.palette.custom.custom,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // [theme.breakpoints.up("md")]: {
            //   width: "40%",
            // },
          }}
        >
          <LinksStartPage cardItem={item} />
        </Card>
      ))}
    </Box>
  );
};
