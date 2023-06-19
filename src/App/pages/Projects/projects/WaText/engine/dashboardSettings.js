const columnsDf = [
  { field: 'timestamp', headerName: 'Timestamp', width: 210 },
  { field: 'sender', headerName: 'Sender', width: 90 },
  { field: 'type', headerName: 'Type', width: 80 },
  { field: 'message', headerName: 'Message', width: 500 },
];

const columnsBasicStats = [
  { field: 'sender', headerName: 'Sender', width: 150 },
  { field: 'numMessages', headerName: '#messages', width: 110 },
  { field: 'numMedia', headerName: '#media', width: 80 },
  { field: 'numAudio', headerName: '#audio', width: 80 },
  { field: 'numImages', headerName: '#images', width: 90 },
  { field: 'numDeleted', headerName: '#deleted', width: 90 },
  { field: 'meanLength', headerName: 'Mean Length', width: 110 },
];

export { columnsDf, columnsBasicStats };