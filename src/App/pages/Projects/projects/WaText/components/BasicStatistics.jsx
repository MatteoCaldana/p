import React from "react";

import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import { DataGrid } from '@mui/x-data-grid';

import * as d3 from "d3";

import { columnsBasicStats } from "../engine/dashboardSettings";
import { CustomToolbar } from "./DataGrids";

const round2 = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

const buildBasicStats = (textDf) => {
  const groupBySender = d3.group(textDf, x => x.sender);
  let basicStats = []
  groupBySender.forEach((val, key) => {
    if (key !== "") basicStats.push({
      id: key,
      sender: key,
      numMessages: val.length,
      numMedia: val.filter(x => x.type.startsWith("media")).length,
      numImages: val.filter(x => x.type.startsWith("media:im")).length,
      numAudio: val.filter(x => x.type.startsWith("media:aud")).length,
      numDeleted: val.filter(x => x.type === "deleted").length,
      meanLength: round2(val.filter(x => x.type === "plainText").map(x => x.message.length).reduce((x, y) => x + y, 0) / val.length),
    })
  })
  return basicStats;
}

const BasicStatistics = ({ textDf }) =>
  <React.Fragment>
    <Divider style={{ marginTop: 10, marginBottom: 10 }} />
    <Typography variant="h6">
      Some Basic Statistics
    </Typography>
    <DataGrid
      style={{ maxHeight: 510 }}
      rows={buildBasicStats(textDf)}
      columns={columnsBasicStats}
      pageSize={10}
      density="compact"
      disableSelectionOnClick
      components={{
        Toolbar: CustomToolbar,
      }}
    />
  </React.Fragment>

export default BasicStatistics;