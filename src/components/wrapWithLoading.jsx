import { Suspense } from "react";

import { CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color="secondary" size={100} disableShrink />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography color="secondary">Project is loading, please wait!</Typography>
      </div>
    </div>
  );
}

const wrapWithLoading = (Component) => {
  return (props) =>
    <Suspense fallback={<Loading />}>
      <Component {...props}/>
    </Suspense>
}

export default wrapWithLoading;