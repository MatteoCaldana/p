import React, { useState } from "react";

import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import { Grid, IconButton, ToggleButton, Tooltip } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';

import { DataGrid } from '@mui/x-data-grid';

import { CustomToolbar } from "./DataGrids";

const WORDS_IN_TABLE_PER_SENDER = 20;
const WORDS_IN_TABLE_TOTAL = 100;

const textDfToWordCount = (textDf) => {
  let wordCount = { '': {} };
  let totalCharacters = { '': 0 };
  textDf.forEach(message => {
    const sender = message.sender;
    if (message.type === "plainText" && sender !== "") {
      if (!(sender in wordCount)) {
        totalCharacters[sender] = 0;
        wordCount[sender] = {};
      }
      const words = message.message
        .split(/\W/)
        .map(w => w.toLowerCase())
        .filter(w => w !== '');
      words.forEach(w => wordCount[sender][w] = (wordCount[sender][w] || 0) + 1);
      words.forEach(w => wordCount[''][w] = (wordCount[''][w] || 0) + 1);

      totalCharacters[sender] += message.message.length;
      totalCharacters[''] += message.message.length;
    }
  });
  return { wordCount, totalCharacters };
}

const buildCols = (wordCount) => {
  const cols = Object.keys(wordCount).map(x => ({
    field: x,
    headerName: x === '' ? 'Total' : x,
    width: 100
  }));
  return [{ field: 'word', headerName: 'Word', width: 100 }, ...cols];
}

const buildWordCountArray = (wordCount) => {
  let wordCountArray = {};
  for (let [key, value] of Object.entries(wordCount)) {
    wordCountArray[key] = [];
    for (let [word, count] of Object.entries(value))
      wordCountArray[key].push([word, count]);
  }
  return wordCountArray;
}

const buildWordsInTable = (wordCountArray) => {
  let wordsInTable = {};
  for (let [key, value] of Object.entries(wordCountArray)) {
    value.sort((a, b) => b[1] - a[1]);
    wordsInTable[key] = value.slice(0, WORDS_IN_TABLE_PER_SENDER).map(x => x[0]);
  }
  return wordsInTable;
}

const doFilterMostCommon = (wordsInTable, wordCountArray) => {
  // if at least 80% of senders has that word in its top half then it is  
  // considered a common word and thus removed
  // or we filter it even if it is a one or two letter word
  const commonWord = () => {
    const nSenders = Math.max(2, Math.trunc(Object.keys(wordsInTable).length * 0.8));
    const commonWords = Object.keys(wordsInTable)
      .flatMap(sender => wordsInTable[sender].slice(0, Math.trunc(WORDS_IN_TABLE_PER_SENDER / 2)));
    let count = {};
    commonWords.forEach(val => count[val] = (count[val] || 0) + 1);
    for (let [word, c] of Object.entries(count)) {
      if (c >= nSenders || word.length <= 2) {
        return word;
      }
    }
    return "";
  };
  let w = commonWord(wordsInTable);
  let i = 0;
  while (w) {
    for (let [key, value] of Object.entries(wordCountArray)) {
      wordsInTable[key].splice(wordsInTable[key].indexOf(w), 1);             // remove common
      if (WORDS_IN_TABLE_PER_SENDER + i < value.length)
        wordsInTable[key].push(value[WORDS_IN_TABLE_PER_SENDER + (i++)][0]); // add new
    }
    w = commonWord(wordsInTable);
  }
  return wordsInTable;
}

const wordCountToTable = (wordCount, totalCharacters, filterMostCommon) => {
  const wordCountArray = buildWordCountArray(wordCount);
  const wordsInTablePreliminary = buildWordsInTable(wordCountArray);
  const wordsInTable = filterMostCommon ? doFilterMostCommon(wordsInTablePreliminary, wordCountArray)
    : wordsInTablePreliminary;

  const mergedWordsInTable = [...new Set(Object.keys(wordsInTable).flatMap(k => wordsInTable[k]))];
  let rows = [];
  mergedWordsInTable.forEach(word => {
    let row = { id: word, word };
    Object.keys(wordsInTable).forEach(sender => row[sender] = wordCount[sender][word] ? wordCount[sender][word] : 0);
    Object.keys(wordsInTable).forEach(sender => row[sender] /= totalCharacters[sender] / 5);
    rows.push(row);
  });

  rows.sort((a, b) => b[''] - a['']);
  rows = rows.slice(0, WORDS_IN_TABLE_TOTAL);

  return rows;
}

const MostUsedWords = ({ textDf }) => {
  const [filterMostCommon, setFilterMostCommon] = useState(false);
  const { wordCount, totalCharacters } = textDfToWordCount(textDf);
  const rows = wordCountToTable(wordCount, totalCharacters, filterMostCommon);
  const cols = buildCols(wordCount);
  return (
    <React.Fragment>
      <Divider style={{ marginTop: 10, marginBottom: 10 }} />
      <Grid container justifyContent="space-between">
        <Grid item>
          <Grid container>
            <Typography variant="h6">
              Most Used Words
            </Typography>
            <Tooltip title={<ul><li>Toggle the button to filter out from the table the most used words and leave the one characterizing each sender</li><li>The numbers in the table represent the relative frequency of the word for that sender</li></ul>}>
              <IconButton size="small">
                <HelpIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid item>
          <ToggleButton selected={filterMostCommon} size="small"
            value={filterMostCommon}
            onClick={() => setFilterMostCommon(f => !f)}
          >
            Filter Out Most Common
          </ToggleButton>
        </Grid>
      </Grid>
      <DataGrid
        style={{ maxHeight: 500 }}
        rows={rows}
        columns={cols}
        pageSize={rows.length}
        density="compact"
        disableSelectionOnClick
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </React.Fragment>
  );
}

export default MostUsedWords;