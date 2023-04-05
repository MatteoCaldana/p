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

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{maxWidth: 1000, margin:"auto"}}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item style={{maxWidth: "50%"}}>
          <Typography variant="h3" component="h2">
            Matteo Caldana
          </Typography>
          <Typography variant="h5" color="textSecondary">
            PhD Student in Mathematical Models at Politecnico di Milano
          </Typography>
        </Grid>
        <CardMedia
          component="img"
          sx={{ width: 140, height: 140, borderRadius: "50%", padding: "10px" }}
          image={myProfilePic}
          alt="Live from space album cover"
        />
      </Grid>

      <Typography component="p" style={{paddingBottom: 10}}>
        I am a matematician and programmer. My main interests are high-performace computing (especially finite elements and CFD) and deep learning. This is reflected in the languages that I love: modern C++ for the elegance with which you can handle memory at a very fine level and Python which speed for code prototyping is under appreciated.
      </Typography>

      <Typography component="p" style={{paddingBottom: 10}}>
        I have experience with coding large projects in other languages (Java, Javascript, MATLAB and SQL). Recently, I have been experimenting with Julia and I have great expectations for it.
      </Typography>

      <Typography component="p" style={{paddingBottom: 10}}>
        I have worked both as an employee (Junior Data Engineer) and as a free-lancer (Software Engineer).
      </Typography>

      <Typography component="p" style={{paddingBottom: 10}}>
        If I am not in front of a PC you will find me in the mountains: running, climbing or skiing.
      </Typography>
      
      <Button color="secondary" endIcon={<KeyboardArrowRightIcon />} onClick={() => navigate('/cv')}>
        More about my skills and professional experience
      </Button>

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
          <Button color="info" href={`mailto:${EMAIL}`} startIcon={<MailOutlineIcon />}>
            Email
          </Button>
        </ListItem>
      </List>
    </Layout>
  );
}

export default Homepage;