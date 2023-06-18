import React from "react";

import { Box, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const CUTOFF = 290;

const BoxRouting = (props) => {
  if (props.to.startsWith('https://')) {
    return (
      <a href={props.to} style={{ textDecoration: 'none', color: 'unset' }}>
        {props.children}
      </a>
    );
  } else {
    return (
      <NavLink to={`/projects/${props.to}`} style={{ textDecoration: 'none', color: 'unset' }}>
        {props.children}
      </NavLink>
    );
  }
}

const ProjectGridItem = ({ project }) => {
  return (
    <BoxRouting to={project.path}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 256,
            height: 128,
          },
        }}
      >
        <Paper elevation={3} style={{ padding: 10 }}>
          {/* 
          <img width={128} height={128}
            style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
            alt={`img-${project.path}`} src={project.largeImg}
          />
          */}
          <Typography align="center" variant="body1">{project.title}</Typography>
          <Typography align="center" color="textSecondary" style={{ fontSize: 10 }}>
            {project.abstract.slice(0, CUTOFF) + (project.abstract.length > CUTOFF ? "..." : "")}
          </Typography>
        </Paper>
      </Box>
    </BoxRouting>
  );
};

export default ProjectGridItem;
