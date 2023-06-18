import React, { useState } from "react";

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import projects from "./projectsList";
import ProjectGridItem from "./ProjectGridItem";

import Layout from "../../../components/Layout";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const intersection = (a1, a2) => a1.filter(x => a2.includes(x))

const Projects = () => {
  const [selectedProjectTag, setSelectedProjectTag] = useState([]);

  const handleChange = (event) => {
    const { target: { value }, } = event;
    setSelectedProjectTag(typeof value === 'string' ? value.split(',') : value,);
  };

  const projectTags = [...new Set(projects.flatMap(x => x.tags))];

  return (
    <Layout style={{ maxWidth: 1000, margin: "auto" }}>
      <Typography variant="h4" align="center">
        A collection my personal projects
      </Typography>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Filter by Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedProjectTag}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {projectTags.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedProjectTag.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container justifyContent="space-evenly">
        {
          projects
            .filter(w => selectedProjectTag.length ? intersection(selectedProjectTag, w.tags).length : true)
            .map(w => <ProjectGridItem key={w.path} project={w} />)
        }
      </Grid>
    </Layout>
  );
}

export default Projects;