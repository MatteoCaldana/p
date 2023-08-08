import React, { useState } from "react";

import { Grid } from "@mui/material";

import * as d3 from "d3";

import MultipleSelectCheckmarks from "../generic/MultipleSelectCheckmarks";

const isNumber = x => x || (!x === 0);

const FollowUpTable = ({ table, reverseColors = false }) => {
  const allSenders = Object.keys(table).filter(x => x !== "");
  const [senders, setSenders] = useState(allSenders);

  const vals = senders.flatMap(s => senders.map(a => table[s][a])).filter(isNumber);
  const min = Math.min(...vals), max = Math.max(...vals);

  const colorMap = d3[`interpolateTurbo`];
  const reverse = x => reverseColors ? 1 - x : x;
  const getBackgroundColor = (x) => {
    if (isNumber(x))
      return colorMap(reverse((x - min) / (max - min)) / 2 + .5);
    return '';
  }

  return (
    <>
      <Grid container alignItems="center">
        Choose the users in the table:
        <MultipleSelectCheckmarks list={allSenders} state={senders} setState={setSenders} />
      </Grid>
      <table>
        <thead>
          <tr><th>Sender\Answerer</th>{senders.map((x, i) => <th key={i}>{x}</th>)}</tr>
        </thead>
        <tbody>
          {senders.map((s, i) =>
            <tr key={i}>
              <td>{s}</td>
              {senders.map((a, j) => <td key={j} style={{ backgroundColor: getBackgroundColor(table[s][a]), color: '#222' }}>
                {`${table[s][a] ? table[s][a] : ''}`.slice(0, 5)}
              </td>)}
            </tr>
          )}
        </tbody>
      </table>
    </>

  );
};

export default FollowUpTable;