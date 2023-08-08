import React from "react";

import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

import ListForm from './generic/ListForm';

const SpecifyContacts = ({ analyzing, analyze, contacts, setContacts }) =>
  <React.Fragment>
    <Divider style={{ marginTop: 10, marginBottom: 10 }} />
    <Typography variant="h6">
      Specify Contacts and Go!
    </Typography>
    <ListForm name="Contacts" state={contacts} setState={setContacts} maxLen={80} />
    <Grid container justifyContent="center">
      <Button variant="contained" color="secondary" onClick={analyze}>
        Analyze!
      </Button>
    </Grid>
    {
      analyzing ? <LinearProgress color="secondary" style={{ marginTop: 10, marginBottom: 10 }} /> : null
    }
  </React.Fragment>

export default SpecifyContacts;