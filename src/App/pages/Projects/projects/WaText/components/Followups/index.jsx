import React, { useState } from "react";

import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import { Grid, IconButton, Slider, Tooltip } from "@mui/material";

import HelpIcon from '@mui/icons-material/Help';

import BasicTabs from "../generic/BasicTabs";
import TimeGapDistribution from "./TimeGapDistribution";
import WhoStartsConversations from "./WhoStartsConversations";
import FollowUpTable from "./FollowUpTable";
import UserEngagementInTime from "./UserEngagementInTime";
import {
  buildConversationDf,
  aggregateConversations,
  aggregateAllAnswers
} from "../../engine/conversations";

const labels = [
  "Time Gap Distribution",
  "Who Starts Conversations",
  "User Follow-Up Time",
  "User Follow-Up Rate",
  "Mean Follow-Up Time",
  "Mean Follow-Up Rate",
];

const calculateValue = t => 1000 * 5*60 * 1.07 ** t;
const calculateLabel = t => {
  const r = x => Math.trunc(x / 100) / 10;
  if (t < 1000 * 60) return `${r(t)} s`;
  if (t < 1000 * 60 * 60) return `${r(t / 60)} min`;
  if (t < 1000 * 60 * 60 * 24) return `${r(t / 3600)} h`;
  return `${r(t / 86400)} day`;
}

const defaultThreshold = 50;

const CustomSlider = ({ setThresholdCommitted }) => {
  const [state, setState] = useState(defaultThreshold);
  return (
    <Grid container>
      Threshold: {calculateLabel(calculateValue(state))}
      <Slider
        value={state}
        onChange={(_, value) => setState(value)}
        onChangeCommitted={(_, value) => setThresholdCommitted(calculateValue(value))}
        valueLabelFormat={calculateLabel}
        scale={calculateValue}
        min={0}
        max={100}
      />
    </Grid>
  );
}

const Followups = ({ textDf }) => {
  const [thresholdCommitted, setThresholdCommitted] = useState(calculateValue(defaultThreshold));

  const conversationDf = buildConversationDf(textDf, thresholdCommitted);
  const { meanAnswerTimeSerie, answerRateSerie, allAnswers, numMsgSent }
    = aggregateConversations(textDf, conversationDf);
  const { meanAnswerTime, answerRate } = aggregateAllAnswers(allAnswers, numMsgSent);

  return (
    <React.Fragment>
      <Divider style={{ marginTop: 10, marginBottom: 10 }} />
      <Grid container>
        <Typography variant="h6">
          Partition Messages into Conversations and Analyze Follow-Up Times
        </Typography>
        <Tooltip title={<ul><li>Toggle the sender by clicking on the legend on the right</li><li>Fine tune the separation parameter manually using the slider</li></ul>}>
          <IconButton size="small">
            <HelpIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <CustomSlider setThresholdCommitted={setThresholdCommitted}/>
      <BasicTabs labels={labels} tabs={[
        { component: () => <TimeGapDistribution textDf={textDf} threshold={thresholdCommitted} /> },
        { component: () => <WhoStartsConversations conversationDf={conversationDf} /> },
        { component: () => <UserEngagementInTime logaxis timeSerie={meanAnswerTimeSerie} conversationDf={conversationDf}/> },
        { component: () => <UserEngagementInTime timeSerie={answerRateSerie} conversationDf={conversationDf}/> },
        { component: () => <FollowUpTable table={meanAnswerTime} /> },
        { component: () => <FollowUpTable reverseColors table={answerRate}/> }
      ]} />
    </React.Fragment>
  );
}

export default Followups;