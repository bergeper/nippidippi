import { Grid } from "@mui/material";
import { AboutPageInfo } from "~/components/About/AboutPageInfo";
import { AboutUs } from "~/components/About/AboutUs";
import { Contact } from "~/components/About/Contact";

export default async function AboutPage() {
  return (
    <>
      <Grid container display={"flex"} justifyContent={"center"}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          spacing={2}
          display={"flex"}
          justifyContent={"center"}
        >
          <AboutPageInfo />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <AboutUs />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Contact />
        </Grid>
      </Grid>
    </>
  );
}
