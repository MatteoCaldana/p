import React from "react";

import { Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';

import Plot from '../generic/Plot';

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

const range = (start, end, step = 1) => {
  let res = [];
  for (let i = start; i < end; i += step) res.push(i);
  return res;
}

const WhoStartsConversations = ({ conversationDf }) => {
  const theme = useTheme();

  let rawData = {};
  conversationDf.forEach(conv => {
    if (rawData[conv.senderStart])
      rawData[conv.senderStart].push(conv.timestampStart)
    else
      rawData[conv.senderStart] = [conv.timestampStart]
  });

  return (
    <Grid container justifyContent="center">
      <Plot
        data={[
          ...Object.keys(rawData).map(sender =>
          ({
            type: 'histogram',
            x: rawData[sender].map(x => new Date(x)),
            name: sender,
            legendgroup: sender,
          })
          ),
          ...Object.keys(rawData).map((sender, idx) =>
          ({
            type: 'scatter',
            x: rawData[sender].map(x => new Date(x)),
            y: range(1, rawData[sender].length + 1),
            name: "Cumulative",
            legendgroup: sender,
            line: { color: plotlyColors[idx % plotlyColors.length] },
            opacity: 0.2,
            yaxis: 'y2',
          })
          ),
        ]}
        layout={{
          yaxis2: {
            tickfont: { color: theme.palette.primary.contrastText },
            anchor: 'free',
            overlaying: 'y',
            side: 'right',
            range: [1, Math.max(...Object.keys(rawData).map(k => rawData[k].length))],
            position: .95
          }
        }}
      />
    </Grid>
  );
}

export default WhoStartsConversations;