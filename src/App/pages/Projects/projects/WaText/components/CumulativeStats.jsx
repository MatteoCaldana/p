import React from "react";

import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import { Grid, IconButton, Tooltip } from "@mui/material";

import HelpIcon from '@mui/icons-material/Help';

import Plot from './generic/Plot';
import * as d3 from "d3";
import BasicTabs from "./generic/BasicTabs";

const MAX_POINTS = 200;

const cumsum = (vals) => {
  const x = vals.map(x => x.timestamp);
  const y = vals.map(x => x.y).map((sum => value => sum += value)(0));
  if (x.length <= MAX_POINTS) {
    return { x, y };
  }
  let xFilter = [], yFilter = [];
  for (let i = 0; i < x.length; i += Math.trunc(x.length / MAX_POINTS) + 1) {
    xFilter.push(x[i]);
    yFilter.push(y[i]);
  }
  xFilter.push(x[x.length - 1]);
  yFilter.push(y[x.length - 1]);
  return { x: xFilter, y: yFilter };
}

const plotGenerator = (textDf) => {
  const groupBySender = d3.group(textDf, x => x.sender);
  let timestampBySender = [];
  groupBySender.forEach((val, key) => {
    if (key !== "") {
      timestampBySender.push({
        type: 'scatter',
        ...cumsum(val),
        mode: 'lines+markers',
        name: key,
      })
    }
  });
  return () => {
    return (
      <Grid container justifyContent="center">
        <Plot
          data={[
            {
              type: 'scatter', mode: 'lines+markers',
              ...cumsum(textDf),
              name: 'Total'
            },
            ...timestampBySender
          ]}
        />
      </Grid>
    );
  }
}

const CumulativeStats = ({ textDf }) => {
  return (
    <React.Fragment>
      <Divider style={{ marginTop: 10, marginBottom: 10 }} />
      <Grid container>
        <Typography variant="h6">
          Cumulative Stats
        </Typography>
        <Tooltip title={<ul><li>Toggle the sender by clicking on the legend on the right</li><li>Some points may have been removed to avoid stressing the CPU</li></ul>}>
          <IconButton size="small">
            <HelpIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <BasicTabs labels={["Number of Messages", "Number of Characters"]}
        tabs={[
          { component: plotGenerator(textDf.map(x => ({ timestamp: x.timestamp, sender: x.sender, y: 1 }))) },
          {
            component: plotGenerator(textDf.filter(x => x.type === "plainText")
              .map(x => ({ timestamp: x.timestamp, sender: x.sender, y: x.message.length })))
          },
        ]}
      />
    </React.Fragment>
  );
}

export default CumulativeStats;