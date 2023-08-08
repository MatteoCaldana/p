import React from "react";

import Typography from "@mui/material/Typography";
import Layout from "../../../../components/Layout";

const AbstractProject = ({ project }) => {
  return (
    <Layout style={{ maxWidth: 1000, margin: "auto" }}>
      <Typography variant="h4">
        {project.title}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        {project.subtitle}
      </Typography>
      <Typography variant="body1">
        <b>Date:</b> {project.when}
      </Typography>
      <Typography variant="body1">
        <b>Abstract:</b> {project.abstract}
      </Typography>
      {project.component ? <project.component /> : null}
    </Layout>
  );
}

export default AbstractProject;