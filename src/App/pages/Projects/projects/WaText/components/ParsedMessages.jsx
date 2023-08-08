import React from "react";

import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import { DataGrid } from '@mui/x-data-grid';

import { CustomToolbar } from "./DataGrids";
import { columnsDf } from "../engine/dashboardSettings";


const ParsedMessages = ({ textDf }) =>
  <React.Fragment>
    <Divider style={{ marginTop: 10, marginBottom: 10 }} />
    <Typography variant="h6">
      The Parsed Messages
    </Typography>
    <DataGrid
      style={{ maxHeight: 510 }}
      rows={textDf}
      columns={columnsDf}
      pageSize={10}
      density="compact"
      disableSelectionOnClick
      components={{
        Toolbar: CustomToolbar,
      }}
    />
  </React.Fragment>

export default ParsedMessages;