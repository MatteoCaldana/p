import React from "react";

import Typography from "@mui/material/Typography";

const AbstractProject = ({ project }) => {
  return (
    <React.Fragment>
      <Typography variant="h4">
        {project.title}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        {project.subtitle}
      </Typography>
      <img width={256} height={256} 
            style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}} 
            alt={`img-${project.path}`} src={project.largeImg} 
          />
      <Typography variant="body1">
        <b>Date:</b> {project.when}
      </Typography>
      <Typography variant="body1">
        <b>Abstract:</b> {project.abstract}
      </Typography>
      {project.component ?  <project.component/> : null}
    </React.Fragment>
  );
}

export default AbstractProject;