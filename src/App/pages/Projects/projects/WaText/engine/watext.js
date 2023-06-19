// -----------------------------------------------------------------------------
// manipulation of the raw text file to the dataframe phase
// -----------------------------------------------------------------------------

const extractContactsHeuristic = (fileText, settings) => {
  const lines = fileText.split('\n');
  const regex = new RegExp(`^${settings.dateRegex}(?<sender>(.*?))${settings.contactToMessage}`);
  let contacts = new Set();
  lines.forEach(l => {
    const match = regex.exec(l);
    if (match) contacts.add(match.groups.sender);
  });
  return [...contacts];
}

// NOTE: a contact cannot be the empty string
const parseMessageFactory = (settings, contacts) => {
  const contactsPseudoRegex = `(?<sender>${contacts.join('|')})${settings.contactToMessage}`;
  const mediaPseudoRegex = `(.*)${settings.mediaPrecursor}(?<message>.*)`;

  //[15/10/21, 16:06:02] Matteo: 
  const plainRegex = new RegExp(`^${settings.dateRegex}${contactsPseudoRegex}(?<message>.*)`);
  //‎[12/11/21, 17:53:41] Matteo: 
  const mediaRegex = new RegExp(`^${settings.mediaPrecursor}${settings.dateRegex}${contactsPseudoRegex}${mediaPseudoRegex}`);
  //[12/11/21, 10:30:23] Matteo: ‎This message was deleted.
  const deletedRegex = new RegExp(`^${settings.dateRegex}${contactsPseudoRegex}${settings.deletedMessageRegex}`);
  //[16/09/18, 23:00:34] ‎You created this group
  const otherSpecialRegex = new RegExp(`^${settings.dateRegex}${settings.specialCharacter}{1,2}(?<message>(.*))`);

  const parseMessage = (line) => { // ------------------------------------------
    const match = deletedRegex.exec(line);
    if (match) {
      return { type: "deleted", message: "", sender: match.groups.sender, senderId: contacts.indexOf(match.groups.sender)};
    } else { // ----------------------------------------------------------------
      const match = plainRegex.exec(line);
      if (match) {
        return { type: "plainText", message: match.groups.message, sender: match.groups.sender, senderId: contacts.indexOf(match.groups.sender) };
      } else { // --------------------------------------------------------------
        const match = mediaRegex.exec(line);
        if (match) {
          const message = match.groups.message;
          let mediaType = "";
          settings.mediaTypes.forEach(e => {if (message.includes(e)) mediaType += ":" + e;});
          return { type: "media" + mediaType, message, sender: match.groups.sender, senderId: contacts.indexOf(match.groups.sender) };
        } else { // ------------------------------------------------------------
          const match = otherSpecialRegex.exec(line);
          if (match) {
            return { type: "info", message: match.groups.message, sender:"", senderId: -1 };
          }
        } // -------------------------------------------------------------------
      }
    }

    //console.debug("Unparsable line:", line);
    //if((new RegExp(settings.dateRegex).exec(line))) {
    //  console.log("Unparsable line:", line);
    //}
    return { type: "" };
  }

  return parseMessage;
}

const separateMessages = (fileText, settings, contacts) => {
  const parseMessage = parseMessageFactory(settings, contacts);
  const lines = fileText.split('\n');
  let messages = [];
  for (let i = 0; i < lines.length; ++i) {
    const message = parseMessage(lines[i]);
    if (message.type) {
      // if the timestamp is older than 1 minute wrt last message we consider
      // it to be a quote of an older message in a newline, thus it is part
      // of the previous message
      const timestamp = extractTimestamp(lines[i], settings);
      if (messages.length && messages[messages.length - 1].timestamp - timestamp > 60) {
        messages[messages.length - 1].rawText += lines[i];
      }
      messages.push({ rawText: lines[i], timestamp, ...message });
    } else if (messages.length > 0) {
      messages[messages.length - 1].rawText += lines[i];
    } else {
      console.log("Error: Line does not match start and does not have any message before!", lines[i]);
    }
  }
  messages.sort((a,b)=>a.timestamp-b.timestamp);
  return messages;
}

const extractTimestamp = (line, settings) => {
  const regexDate = new RegExp(settings.dateRegex);
  const match = regexDate.exec(line);
  const get = (field) => match.groups[field] ? parseInt(match.groups[field]) : null
  return new Date(get('y') < 100 ? get('y') + 2000: get('y'), get('m') - 1, get('d'), get('H'), get('M'), get('S'));
}

export {separateMessages, extractContactsHeuristic};