import React from "react";

import { Grid } from "@mui/material";
import TypographyLink from "../../components/TypographyLink";

const TopMenu = () => {
  return (
    <Grid container alignItems="center" spacing={3}>
      <Grid item>
        <TypographyLink to="/cv">
          CV
        </TypographyLink>
      </Grid>
      <Grid item>
        <TypographyLink to="/projects">
          Projects
        </TypographyLink>
      </Grid>
      <Grid item>
      </Grid>
    </Grid>
  )
}

export default TopMenu;