const settingsIphoneEng = {
    dateRegex: "\\[(?<d>\\d+)/(?<m>\\d+)/(?<y>\\d+), (?<H>\\d+):(?<M>\\d+):(?<S>\\d+)\\] ",
    contactToMessage: ": ",
    specialCharacter: "‎",
    mediaPrecursor: "‎",
    deletedMessageRegex: "‎This message was deleted.$",
// media types name in local language
    mediaTypes: [
        "image",
        "audio",
        "video",
        "document",
        "GIF",
        "sticker",
        "contact",
        "Location"
    ],
};

const settingsIphoneIta = {
    dateRegex: "\\[(?<d>\\d+)/(?<m>\\d+)/(?<y>\\d+), (?<H>\\d+):(?<M>\\d+):(?<S>\\d+)\\] ",
    contactToMessage: ": ",
    specialCharacter: "‎",
    mediaPrecursor: "‎",
    deletedMessageRegex: "‎((Hai eliminato questo messaggio)|(Questo messaggio è stato eliminato)).",
// media types name in local language
    mediaTypes: [
        "immagine",
        "audio",
        "video",
        "documento",
        "GIF",
        "sticker",
        "contatto",
        "Posizione"
    ],
};

export { settingsIphoneEng, settingsIphoneIta };