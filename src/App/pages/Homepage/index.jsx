import React from "react";
import { useNavigate } from 'react-router-dom';

import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import { Button, List, ListItem } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import myProfilePic from '../../../assets/me.jpg';
import { EMAIL } from '../../../assets/constants.js';
import Layout from "../../../components/Layout";
import { GitHub, School } from "@mui/icons-material";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ maxWidth: 1000, margin: "auto" }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item style={{ maxWidth: "50%" }}>
          <Typography variant="h3" component="h2">
            Matteo Caldana
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Postdoctoral Researcher at Politecnico di Milano
          </Typography>
        </Grid>
        <CardMedia
          component="img"
          sx={{ width: 140, height: 140, borderRadius: "50%", padding: "10px" }}
          image={myProfilePic}
          alt="Live from space album cover"
        />
      </Grid>

      <Typography component="p" style={{ paddingBottom: 10 }}>
        I am a Postdoctoral Researcher student in applied mathematics. My main interests are high-performance computing and machine learning. It reflects in the languages I love: C++ for the zero-overhead principle and Python, which enables you to write code faster than in any other language. In my free times I enjoy hackathlons and CTF challenges.
      </Typography>

      <Typography component="p" style={{ paddingBottom: 10 }}>
        I also had the opportunity to develop code for large projects in other languages: Java, JavaScript, MATLAB, and SQL. 
      </Typography>

      <Typography component="p" style={{ paddingBottom: 10 }}>
        I have worked both as an employee (Junior Data Engineer) and as a freelancer (Software Engineer).
      </Typography>

      <Typography component="p" style={{ paddingBottom: 10 }}>
        If I am not in front of a PC, you will find me in the mountains: running, climbing, or skiing.
      </Typography>

      <Button variant="outlined" color="secondary" endIcon={<KeyboardArrowRightIcon />} onClick={() => navigate('/cv')}>
        Read my full CV!
      </Button>
      <div style={{"minHeight": 15}}/>
      <Typography variant="h6">
        Get in contact with me:
      </Typography>
      <List>
        <ListItem dense>
          <Button color="info" href="https://it.linkedin.com/in/matteo-caldana-7671851b0" startIcon={<LinkedInIcon />}>
            Linkedin
          </Button>
        </ListItem>
        <ListItem dense>
          <Button color="info" href="https://github.com/MatteoCaldana/" startIcon={<GitHub />}>
            Github
          </Button>
        </ListItem>
        <ListItem dense>
          <Button color="info" href="https://scholar.google.com/citations?user=1eUNZJQAAAAJ&hl=en" startIcon={<School />}>
            Google Scholar
          </Button>
        </ListItem>
        <ListItem dense>
          <Button color="info" href={`mailto:${EMAIL}`} startIcon={<MailOutlineIcon />}>
            Email
          </Button>
        </ListItem>
      </List>
    </Layout>
  );
}

export default Homepage;