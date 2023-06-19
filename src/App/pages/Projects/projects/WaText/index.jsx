import React, { useEffect, useState, Suspense } from "react";

import Divider from '@mui/material/Divider';
import { useTheme, CircularProgress } from "@mui/material";
import Carousel from 'react-material-ui-carousel'

import { settingsIphoneIta } from './engine/settings';
import { extractContactsHeuristic, separateMessages } from './engine/watext';
import LoadAndSettings from "./components/LoadAndSettings";
import SpecifyContacts from "./components/SpecifyContacts";
import HowToGetChatFile from "./components/HowToGetChatFile";

import img1 from "../../../../../assets/projects/watext/step1.png"
import img2 from "../../../../../assets/projects/watext/step2.png"
import img3 from "../../../../../assets/projects/watext/step3.png"
import img41 from "../../../../../assets/projects/watext/step4.1.png"
import img42 from "../../../../../assets/projects/watext/step4.2.png"
import img5 from "../../../../../assets/projects/watext/step5.png"
import img6 from "../../../../../assets/projects/watext/step6.png"
import img71 from "../../../../../assets/projects/watext/step7.1.png"
import img72 from "../../../../../assets/projects/watext/step7.2.png"

const ParsedMessages = React.lazy(() => import('./components/ParsedMessages'));
const BasicStatistics = React.lazy(() => import('./components/BasicStatistics'));
const TimeDistribution = React.lazy(() => import('./components/TimeDistribution'));
const CumulativeStats = React.lazy(() => import('./components/CumulativeStats'));
const MostUsedWords = React.lazy(() => import('./components/MostUsedWords'));
const Followups = React.lazy(() => import('./components/Followups'));

const imgs = [img1, img2, img3, img41, img42, img5, img6, img71, img72];

// TODO: put thing in accordions to boost performances? -> lazy load
// TODO: android settigns and italian (2x2 = 4 total)
// TODO: test the unparsable lines /engine/watext

const Loading = () => {
  return (
    <div>
      <CircularProgress color="secondary" disableShrink /> Loading...
    </div>
  );
}

const WaText = () => {
  // spinners
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  // raw data
  const [rawFile, setRawFile] = useState(null);
  const [rawText, setRawText] = useState("");
  const [settings, setSettings] = useState(settingsIphoneIta);
  const [contacts, setContacts] = useState([]);
  const [textDf, setTextDf] = useState([]);

  const buildTextDf = async () => {
    setTextDf(
      separateMessages(rawText, settings, contacts.filter(x => x !== ""))
        .map((x, i) => ({ ...x, id: i }))
    );
  }

  const analyze = () => {
    setAnalyzing(true);
    setTextDf([]);
    setTimeout(() => buildTextDf().then(() => setAnalyzing(false)), 200);
  };

  useEffect(() => {
    rawFile && rawFile.text().then(x => { setRawText(x); setLoading(false); });
  }, [rawFile])

  useEffect(() => {
    rawText && setContacts(extractContactsHeuristic(rawText, settings));
  }, [rawText, settings])

  const theme = useTheme();

  return (
    <React.Fragment>
      <Carousel>
        {imgs.map((x, i) => <img src={x} alt={i} key={i} style={{ height: 300, marginLeft: "auto", marginRight: "auto", display: "block" }} />)}
      </Carousel>
      <HowToGetChatFile />
      <Divider style={{ marginTop: 10, marginBottom: 10 }} />
      <LoadAndSettings theme={theme}
        settings={settings} setSettings={setSettings}
        loading={loading} setLoading={setLoading}
        rawFile={rawFile} setRawFile={setRawFile}
        rawText={rawText}
      />
      {
        rawText.length ?
          <SpecifyContacts analyzing={analyzing} analyze={analyze}
            contacts={contacts} setContacts={setContacts}
          />
          :
          null
      }
      {
        textDf.length ?
          <React.Fragment>
            <Suspense fallback={<Loading />}>
              <ParsedMessages textDf={textDf} />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <BasicStatistics textDf={textDf} />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <TimeDistribution textDf={textDf} />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <CumulativeStats textDf={textDf} />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <MostUsedWords textDf={textDf} />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <Followups textDf={textDf} />
            </Suspense>
          </React.Fragment>
          :
          null
      }

    </React.Fragment>
  );
}

export default WaText;