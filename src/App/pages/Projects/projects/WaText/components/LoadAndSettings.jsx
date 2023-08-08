import React from "react";

import Typography from "@mui/material/Typography";
import { Button, CircularProgress, Grid, IconButton, List, ListItem, TextField, Tooltip } from "@mui/material";

import FileUploadIcon from '@mui/icons-material/FileUpload';
import HelpIcon from '@mui/icons-material/Help';

import ListForm from "./generic/ListForm";

const SettingsTextField = ({ settings, setSettings, field }) =>
  <TextField size="small" variant="standard" color="secondary"
    label={field}
    value={settings[field]}
    onChange={e => setSettings(s => ({ ...s, [field]: e.target.value }))}
    fullWidth
  />

const LoadAndSettings = ({ theme, settings, setSettings, loading, setLoading, rawFile, setRawFile, rawText }) =>
  <Grid container>
    <Grid item style={{ minWidth: '50%' }}>
      <Typography variant="h6">
        Load the file
      </Typography>
      <Grid container alignItems="center">
        <Button component="label" color="secondary" startIcon={<FileUploadIcon />}>
          Upload File
          <input
            onChange={e => { setLoading(true); setRawFile(e.target.files.item(0)); }}
            type="file" accept='.txt' hidden
          />
        </Button>
        {
          loading ?
            <CircularProgress color="secondary" disableShrink />
            : (
              rawFile ?
                <React.Fragment>
                  {rawFile.name}
                  <br />
                  <textarea
                    readOnly
                    value={rawText}
                    style={{
                      resize: 'vertical',
                      minWidth: '95%', minHeight: 300,
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText
                    }}
                  />
                </React.Fragment>
                :
                null)
        }
      </Grid>
    </Grid>
    <Grid item style={{ minWidth: '50%' }}>
      <Grid container>
        <Typography variant="h6">
          Settings
        </Typography>
        <Tooltip title={
          <ul>
            <li>dateRegex: regex of the timestamp, need symbolic groups</li>
            <li>contactToMessage: separator between contact name and message</li>
            <li> specialCharacter: character present in special info messages without a sender (for iPhone is U200E) </li>
            <li> mediaPrecursor: character present at the start of messages containing media (for iPhone is U200E)</li>
            <li> mediaTypes: list of possible medias in your local language</li>
            <li> specialActions: list of regex matching special info actions, may add the only special action ['(.*)'] to accept anything that has a special character precursor</li>
          </ul>
        }>
          <IconButton size="small">
            <HelpIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <List dense>
        <ListItem>
          <SettingsTextField settings={settings} setSettings={setSettings} field="dateRegex" />
        </ListItem>
        <ListItem>
          <SettingsTextField settings={settings} setSettings={setSettings} field="contactToMessage" />
        </ListItem>
        <ListItem>
          <SettingsTextField settings={settings} setSettings={setSettings} field="specialCharacter" />
        </ListItem>
        <ListItem>
          <SettingsTextField settings={settings} setSettings={setSettings} field="mediaPrecursor" />
        </ListItem>
        <ListItem>
          <ListForm name="Media Type" state={settings.mediaTypes}
            setState={x =>
              setSettings(s => ({ ...s, mediaTypes: typeof (x) === 'function' ? x(s.mediaTypes) : x }))
            }
          />
        </ListItem>
      </List>
    </Grid>
  </Grid>

export default LoadAndSettings;