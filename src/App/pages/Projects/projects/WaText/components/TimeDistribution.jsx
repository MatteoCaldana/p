import React, { useState } from "react";

import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import { Grid, IconButton, ToggleButton, Tooltip } from "@mui/material";

import HelpIcon from '@mui/icons-material/Help';

import Plot from './generic/Plot';
import * as d3 from "d3";
import BasicTabs from "./generic/BasicTabs";

// For more time formatting types, see: https://github.com/d3/d3-time-format/blob/master/README.md
const plotGenerator = (textDf, layout) => {
  const groupBySender = d3.group(textDf, x => x.sender);
  let timestampBySender = [];
  groupBySender.forEach((val, key) => {
    if (key !== "") timestampBySender.push({
      type: 'histogram',
      x: val.map(x => x.timestamp),
      name: key,
      opacity: 0.75,
    })
  });
  return () => {
    return (
      <Grid container justifyContent="center">
        <Plot
          data={[
            { type: 'histogram', x: textDf.map(x => x.timestamp), name: 'Total', opacity: 0.75, },
            ...timestampBySender
          ]}
          layout={layout}
        />
      </Grid>
    );
  }
}

const copyDate = (date, year = null, month = null, day = null) => {
  if (year === null) {
    return date;
  } else if (month === null) {
    return new Date(year, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
  } else if (day === null) {
    return new Date(year, month, date.getDay() + 1, date.getHours(), date.getMinutes(), date.getSeconds());
  } else {
    return new Date(year, month, day, date.getHours(), date.getMinutes(), date.getSeconds());
  }
}

const TimeDistribution = ({ textDf }) => {
  const [fine, setFine] = useState(false);
  return (
    <React.Fragment>
      <Divider style={{ marginTop: 10, marginBottom: 10 }} />
      <Grid container justifyContent="space-between">
        <Grid item>
          <Grid container>
            <Typography variant="h6">
              Time Distribution
            </Typography>
            <Tooltip title={<ul><li>Toggle the sender by clicking on the legend on the right</li><li>Change the binning from coarse to fine (not avaiable for Total)</li></ul>}>
              <IconButton size="small">
                <HelpIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid item>
          <ToggleButton value={fine} selected={fine} size="small" onClick={() => setFine(f => !f)}>Fine Binning</ToggleButton>
        </Grid>
      </Grid>
      {
        fine ?
          <BasicTabs labels={["Total", "Yearly", "Weekly", "Daily"]}
            tabs={[
              { component: plotGenerator(textDf) },
              { component: plotGenerator(textDf.map(x => ({ ...x, timestamp: copyDate(x.timestamp, 2021) }))) },
              {
                component: plotGenerator(
                  textDf.map(x => ({ ...x, timestamp: copyDate(x.timestamp, 2017, 0) })), // first jan 2017 is Sunday
                  {
                    xaxis: {
                      tickformat: '%a'
                    }
                  })
              },
              { component: plotGenerator(textDf.map(x => ({ ...x, timestamp: copyDate(x.timestamp, 2021, 0, 1) }))) },
            ]}
          />
          :
          <BasicTabs labels={["Total", "Yearly", "Weekly", "Daily"]}
            tabs={[
              { component: plotGenerator(textDf) },
              { component: plotGenerator(textDf.map(x => ({ ...x, timestamp: x.timestamp.getMonth() }))) },
              {
                component: plotGenerator(
                  textDf.map(x => ({ ...x, timestamp: x.timestamp.getDay() })),
                  {
                    xaxis: {
                      tickvals: [0, 1, 2, 3, 4, 5, 6],
                      ticktext: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                    }
                  }
                )
              },
              { component: plotGenerator(textDf.map(x => ({ ...x, timestamp: x.timestamp.getHours() }))) },
            ]}
          />
      }

    </React.Fragment>
  );
}

export default TimeDistribution;