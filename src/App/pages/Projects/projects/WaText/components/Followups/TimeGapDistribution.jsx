import React from "react";

import { Grid } from "@mui/material";

import Plot from '../generic/Plot';

//------------------------------------------------------------------------------
// consider two consecutives messages as different if too much time is passed
// or the senders are different
const getFilteredTimeGaps = (textDf, threshold) => {
  let filtered = [], differentSender = [];;
  let j = 0;
  for (let i = 0; i < textDf.length - 1; ++i) {
    if (textDf[i + 1].timestamp - textDf[j].timestamp > threshold) {
      if (textDf[i + 1].senderId !== textDf[i].senderId) {
        differentSender.push(textDf[i + 1].timestamp - textDf[i].timestamp);
      }
      filtered.push(textDf[i + 1].timestamp - textDf[i].timestamp);
      j = i + 1;
    }
  }
  return { filtered, differentSender };
}

const TimeGapDistribution = ({ textDf, threshold }) => {
  const timeGaps = textDf.slice(1).map((x, i) => x.timestamp - textDf[i].timestamp);
  const { filtered, differentSender } = getFilteredTimeGaps(textDf, threshold);
  const transform = x => Math.log10(x);
  const tickvals = [1, 10, 60, 600, 3600, 5 * 3600, 86400, 7 * 86400, 30 * 86400].map(x => x * 1000);
  const ticktext = ['1s', '10s', '1min', '10min', '1h', '5h', '1d', '7d', '30d'];
  return (
    <Grid container justifyContent="center">
      <Plot
        data={[
          { type: 'histogram', x: timeGaps.map(transform), name: 'Full' },
          { type: 'histogram', x: filtered.map(transform), name: 'Filtered' },
          { type: 'histogram', x: differentSender.map(transform), name: 'Different<br>Sender' },
        ]}
        layout={
          {
            xaxis: {
              tickvals: tickvals.map(transform),
              ticktext: ticktext
            }
          }
        }
      />
    </Grid>
  );
}

export default TimeGapDistribution;