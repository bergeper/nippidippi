"use client";

import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import { theme } from "~/styles/theme/theme";

export const AboutUs = () => {
  return (
    <Box
      sx={{
        my: 5,
        p: 1,
        background: theme.palette.custom.custom,
        [theme.breakpoints.up("sm")]: {
          m: 2.5,
          mt: 10,
          borderRadius: "4px",
        },
      }}
    >
      <Typography sx={{ p: 2, fontWeight: "bold" }}>
        About NippiDippi
      </Typography>
      <Divider />
      <Typography sx={{ p: 2 }}>
        Welcome to our user-friendly website, crafted with the sole purpose of
        transforming your search for the perfect chip and dip combination into a
        delightful adventure. Recognizing the overwhelming array of options in
        the market, we sought to simplify the selection process, saving you time
        and enhancing your snacking experience. Our mission is to alleviate the
        frustration of finding the ideal match by providing a platform that
        effortlessly guides you to unique and tasty pairings. What sets us apart
        is the incorporation of a random combination feature, akin to spinning a
        wheel, injecting an element of surprise into your culinary journey. Bid
        farewell to the monotony of routine choices and embrace the joy of
        discovering new and delectable combinations at the click of a button.
        <br />
        <br />
        On our platform, every visit becomes an exploration, offering you
        unconventional yet delicious matches that can elevate your snacking
        game. We invite you to join us in celebrating the joy of snacking by
        making every bite a moment to savor. Say goodbye to the endless
        pondering over chip and dip choices and let our website turn your
        snacking routine into an exciting culinary adventure. Your perfect
        pairing is just a click away!{" "}
        <Link
          href="/spinner"
          style={{
            textDecoration: "none",
          }}
        >
          Too the Spinner
        </Link>
      </Typography>
    </Box>
  );
};
