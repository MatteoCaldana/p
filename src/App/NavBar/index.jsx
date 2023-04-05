import React from "react";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";
import Layout from "../../components/Layout";
import TypographyLink from "../../components/TypographyLink";
import ContainedIconButton from "../../components/ContainedIconButton";

const moonColor = "#8888FF";
const sunColor = "#FBD38D";

const NavBar = ({ isMobile, isThemeLight, setThemeLight }) => {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Layout>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              {isMobile ? <SideMenu /> : "Matteo Caldana"}
            </Grid>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item style={{ paddingRight: 20 }}>
                  <TypographyLink variant="subtitle1" to="/homepage"
                    style={{ textShadow: `0 0 2px #${isThemeLight ? 'DDD' : '222'}`, fontWeight: "bold" }}
                  >
                    <Grid container alignItems="center">
                      Home
                    </Grid>
                  </TypographyLink>
                </Grid>
                <Grid item>
                  {isMobile ? null : <TopMenu />}
                </Grid>
                <ContainedIconButton onClick={() => setThemeLight(x => !x)} size="medium"
                  iconcolor={isThemeLight ? moonColor : sunColor}
                  icon={isThemeLight ? DarkModeIcon : LightModeIcon}
                />
              </Grid>
            </Grid>
          </Grid>
        </Layout>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;