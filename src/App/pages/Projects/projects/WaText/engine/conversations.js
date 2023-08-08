//------------------------------------------------------------------------------
// The idea is to split the textDf into "conversations", a group of coesive 
// messages in time i.e. there is never a large enough time gap between them
// Each conversation has its own followup tab so we can mesure the engagement
// among users in time

const buildConversationDf = (textDf, threshold) => {
  let conversationDf = [];
  let i = 0, j = 0;
  while (i < textDf.length) {
    const mkMsg = (msg) => ({
      sender: msg.sender,
      senderId: msg.senderId,
      timestamp: msg.timestamp,
      count: 1
    });
    let conversation = [mkMsg(textDf[i])];
    while ((j < textDf.length - 1) &&  // find conversation end
      (textDf[j + 1].timestamp - textDf[j].timestamp <= threshold)) {
      const backIdx = conversation.length - 1;
      if (conversation[backIdx].sender === textDf[j + 1].sender) {   // group same consecutive sender
        conversation[backIdx].count++;
        conversation[backIdx].timestamp = new Date(textDf[j + 1].timestamp.getTime()
          + conversation[backIdx].timestamp.getTime());
      } else {
        conversation.push(mkMsg(textDf[j + 1]));
      }
      j++;
    }
    const convRow = makeConversation(conversation);
    if (convRow)
      conversationDf.push(convRow);
    i = ++j;
  }
  return conversationDf;
}

const makeConversation = (conversationMsg) => {
  const conversationMsgFiltered = conversationMsg.filter(x => x.senderId !== -1);
  if (conversationMsgFiltered.length === 0)
    return false;
  let numMsgBySender = {};
  conversationMsgFiltered.forEach(msg =>
    numMsgBySender[msg.sender] = (numMsgBySender[msg.sender] || 0) + 1
  )
  return {
    followup: makeFollowupTable(conversationMsgFiltered),
    timestampStart: conversationMsgFiltered[0].timestamp / conversationMsgFiltered[0].count,
    senderStart: conversationMsgFiltered[0].sender,
    numMsg: conversationMsgFiltered.map(x => x.count).reduce((x, y) => x + y, 0),
    numMsgBySender
  };
}

const prepareFollowupTable = (senders) => {
  let table = {};
  senders.forEach(s => {
    let tmp = {};
    senders.forEach(a => { if (a !== s) tmp[a] = [] });
    table[s] = tmp;
  });
  return table;
}

const makeFollowupTable = (conversationMsg) => {
  const senders = [...new Set(conversationMsg.map(x => x.sender))];
  let table = prepareFollowupTable(senders);
  const firstAnswer = (idx, answerer) => {
    for (let i = idx + 1; i < conversationMsg.length; ++i) {
      if (conversationMsg[i].sender === answerer)
        return conversationMsg[i].timestamp / conversationMsg[i].count;
    }
    return Infinity;
  }
  conversationMsg.forEach((msg, i) => {
    senders.forEach(answerer => {
      if (answerer !== msg.sender) {
        table[msg.sender][answerer].push(
          (firstAnswer(i, answerer) - msg.timestamp / msg.count) / 1000
        );
      }
    });
  });
  return table;
}

//------------------------------------------------------------------------------
// given the conversations in time we calculate the mean follow-up times for 
// each couple of users and the answer rate

const aggregateConversations = (textDf, conversationDf) => {
  const senders = [...new Set(textDf.map(x => x.sender))];

  let allAnswers = prepareFollowupTable(senders);
  let numMsgSent = {};
  let meanAnswerTimeSerie = prepareFollowupTable(senders);
  let answerRateSerie = prepareFollowupTable(senders);

  for (let t = 0; t < conversationDf.length; ++t) {
    const row = conversationDf[t];
    for (let i = 0; i < senders.length; ++i) {
      const sender = senders[i];
      numMsgSent[sender] = (numMsgSent[sender] || 0)
        + (row.numMsgBySender[sender] ? row.numMsgBySender[sender] : 0);
      for (let j = 0; j < senders.length; ++j) {
        const answerer = senders[j];
        if (i !== j) {
          if (row.followup[sender] && row.followup[sender][answerer]) {
            const goodAnswers = row.followup[sender][answerer].filter(x => x !== Infinity);
            allAnswers[sender][answerer] = allAnswers[sender][answerer].concat(goodAnswers);
            if (goodAnswers.length > 0)
              meanAnswerTimeSerie[sender][answerer].push(goodAnswers.reduce((x, y) => x + y) / goodAnswers.length);
            else
              meanAnswerTimeSerie[sender][answerer].push(Infinity);
            answerRateSerie[sender][answerer].push(goodAnswers.length / row.numMsgBySender[sender]);
          } else {
            answerRateSerie[sender][answerer].push(0);
            meanAnswerTimeSerie[sender][answerer].push(Infinity);
          }
        }
      }
    }
  }

  return { meanAnswerTimeSerie, answerRateSerie, allAnswers, numMsgSent }
}

const aggregateAllAnswers = (allAnswers, numMsgSent) => {
  const senders = Object.keys(allAnswers);
  let meanAnswerTime = prepareFollowupTable(senders);
  let answerRate = prepareFollowupTable(senders);

  for (let i = 0; i < senders.length; ++i) {
    const sender = senders[i];
    for (let j = 0; j < senders.length; ++j) {
      const answerer = senders[j];
      if (i !== j) {
        meanAnswerTime[sender][answerer] = allAnswers[sender][answerer].reduce((x, y) => x + y, 0)
          / allAnswers[sender][answerer].length;
        answerRate[sender][answerer] = allAnswers[sender][answerer].length
          / numMsgSent[sender];
      }
    }
  }

  return { meanAnswerTime, answerRate }
}

export { buildConversationDf, aggregateConversations, aggregateAllAnswers }