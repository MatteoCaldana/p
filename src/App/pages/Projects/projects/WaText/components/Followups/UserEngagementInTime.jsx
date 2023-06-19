import React, { useState } from "react";

import { Grid, Slider } from "@mui/material";

import Plot from '../generic/Plot';
import { emaKernel, convolution } from "../../engine/movingAverage";
import MultipleSelectCheckmarks from "../generic/MultipleSelectCheckmarks";

const plotlyColors = [
  '#1f77b4',  // muted blue
  '#ff7f0e',  // safety orange
  '#2ca02c',  // cooked asparagus green
  '#d62728',  // brick red
  '#9467bd',  // muted purple
  '#8c564b',  // chestnut brown
  '#e377c2',  // raspberry yogurt pink
  '#7f7f7f',  // middle gray
  '#bcbd22',  // curry yellow-green
  '#17becf'   // blue-teal
];

const N = 10000;
const defaultThreshold = 90;

const calculateValue = t => t / 100;

const CustomSlider = ({ setThresholdCommitted }) => {
  const [state, setState] = useState(defaultThreshold);
  return (
    <Grid container justifyContent="center" alignItems="center">
      Select smoothing: {calculateValue(state)}
      <Slider
        style={{maxWidth: 300}}
        value={state}
        onChange={(_, value) => setState(value)}
        onChangeCommitted={(_, value) => setThresholdCommitted(calculateValue(value))}
        scale={calculateValue}
        min={0}
        max={100}
      />
    </Grid>
  );
}

const UserEngagementInTime = ({ conversationDf, timeSerie, logaxis = false }) => {
  const allSenders = Object.keys(timeSerie).filter(x => x !== "");
  const [senders, setSenders] = useState(allSenders.slice(0, 2));
  const [thresholdCommitted, setThresholdCommitted] = useState(calculateValue(defaultThreshold));
  const emaK = emaKernel(N, thresholdCommitted);

  let time = conversationDf.map(x => new Date(x.timestampStart));
  let table = [];
  senders.forEach(s => Object.keys(timeSerie[s]).forEach(a => {
    if (s !== '' && a !== '') {
      table.push({
        x: timeSerie[s][a].map((x, i) => [x, i]).filter(x => x[0] !== Infinity).map(x => time[x[1]]),
        y: convolution(timeSerie[s][a].filter(x => x !== Infinity), emaK),
        type: 'scatter',
        legendgroup: `${s} Vs ${a}`,
        mode: 'lines',
        name: `Moving Average`,
        visible: 'legendonly',
        line: { width: 7 },
        opacity: 0.4
      });
    }
  }));
  const startLen = table.length;
  senders.forEach(s => Object.keys(timeSerie[s]).forEach(a => {
    if (s !== '' && a !== '') {
      table.push({
        x: time,
        y: timeSerie[s][a],
        type: 'scatter',
        mode: 'markers',
        name: `${s} Vs ${a}`,
        legendgroup: `${s} Vs ${a}`,
        visible: 'legendonly',
        line: { color: plotlyColors[(table.length - startLen) % plotlyColors.length] },
        opacity: 0.7
      });
    }
  }));
  return (
    <Grid container justifyContent="center" alignItems="center">
      Select senders: <MultipleSelectCheckmarks list={allSenders} state={senders} setState={setSenders} />
      <CustomSlider setThresholdCommitted={setThresholdCommitted} />
      <Plot data={table} layout={{
        yaxis: {
          type: logaxis ? 'log' : 'normal',
          autorange: true
        }
      }} />
    </Grid>
  );
}

export default UserEngagementInTime;