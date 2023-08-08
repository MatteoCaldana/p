import React from "react";

import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";

import ColorLink from "../../../../../../components/ColorLink";

const HowToGetChatFile = () =>
  <React.Fragment>
    <Divider style={{ marginTop: 10, marginBottom: 10 }} />
    <Typography variant="h6">
      How To Get The Chat File
    </Typography>
    <ul>
      <li><ColorLink to="https://faq.whatsapp.com/it/android/23756533">For Android</ColorLink></li>
      <li><ColorLink to="https://faq.whatsapp.com/it/iphone/20888066" >For iPhone</ColorLink></li>
    </ul>
  </React.Fragment>

export default HowToGetChatFile;