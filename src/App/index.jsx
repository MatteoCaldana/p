import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import { createTheme } from '@mui/material/styles';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid } from "@mui/material";

import appRoutes from "./routes";
import Homepage from './pages/Homepage';
import NavBar from "./NavBar";
import light from "../themes/light-theme";
import dark from "../themes/dark-theme";
import TypographyLink from "../components/TypographyLink";
import { EMAIL, GITHUB } from '../assets/constants.js';
import './index.css';


const App = () => {
  const lightTheme = createTheme(light);
  const darkTheme = createTheme(dark);

  const [isThemeLight, setThemeLight] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const currTheme = isThemeLight ? lightTheme : darkTheme;

  const Layout = () => {
    return (
      <div id="page-container">
        <div id="content-wrap">
          <NavBar isMobile={!matches}
            isThemeLight={isThemeLight} setThemeLight={setThemeLight}
          />
          <div style={{height: 45}}></div>
          <Outlet />
        </div>
        <div id="footer" style={{background: currTheme.palette.primary.light }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={11}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item style={{fontSize: 12 }}>Last update: 2023-04-06</Grid>
              <TypographyLink component={'span'} to={`mailto:${EMAIL}`} style={{fontSize: 12 }}>
                Contact me!
              </TypographyLink>
              <TypographyLink component={'span'} to={`https://github.com/${GITHUB}`}>
                <Grid container alignItems="center" style={{fontSize: 14 }}>
                  <GitHubIcon fontSize="inherit" />
                  <div style={{paddingLeft: 5}}>Source</div>
                </Grid>
              </TypographyLink>
            </Grid>
          </Grid>
        </Grid>  
        </div>

      </div>
    );
  }

  return (
    <ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            {
              appRoutes.map((route) =>
                <Route key={route.id} path={route.path}
                  element={<route.component />}
                />
              )
            }
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}


export default App;