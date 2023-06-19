import React from "react";

import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton color="info" />
      <GridToolbarFilterButton style={{ color: '#2196f3' }} />
      <GridToolbarDensitySelector color="info" />
      <GridToolbarExport color="info" />
    </GridToolbarContainer>
  );
}

export { CustomToolbar };