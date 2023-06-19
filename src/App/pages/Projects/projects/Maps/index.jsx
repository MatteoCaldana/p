import React, { useState, useEffect } from 'react';

import { MapContainer, TileLayer, useMap, ScaleControl, CircleMarker, Circle, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import useGeolocation from "react-hook-geolocation";

import mapTiles from './mapTiles'

const defaultPosition = [45.857854, 9.470903];

const NativeSelectDemo = ({ setTileIdx }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          onChange={e => setTileIdx(e.target.value)}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          {mapTiles.map((x, i) => <option key={i} value={i}>{i}</option>)}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

const ComponentWithGeolocation = () => {
  const geolocation = useGeolocation({enableHighAccuracy: true});
  return !geolocation.error ? (
    <ul>
      <li>Latitude: {geolocation.latitude}</li>
      <li>Longitude: {geolocation.longitude}</li>
      <li>Location accuracy: {geolocation.accuracy}</li>
      <li>Altitude: {geolocation.altitude}</li>
      <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
      <li>Heading: {geolocation.heading}</li>
      <li>Speed: {geolocation.speed}</li>
      <li>Timestamp: {geolocation.timestamp}</li>
    </ul>
  ) : (
    <p>No geolocation, sorry.</p>
  );
};

const UpdatePosition = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [position]);
  return null;
}

const meanPosition = (data) =>
  data.map(x => [x.latDeg, x.lonDeg])
    .reduce((a, b) => [a[0] + b[0], a[1] + b[1]])
    .map(x => x / data.length)

const Map = ({ data, curIdx }) => {
  const [tileIdx, setTileIdx] = useState(4);
  const position = data ? meanPosition(data) : defaultPosition;
  const mapTile = mapTiles[tileIdx];

  return (
    <>
      <ComponentWithGeolocation />
      <NativeSelectDemo setTileIdx={setTileIdx} />
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: 500, width: 1000 }}
      >
        <TileLayer
          attribution={mapTile.attribution}
          url={mapTile.url}
        />
        {data && data.filter(e => e.acc > 2).map(e => (
          <Circle
            center={[e.latDeg, e.lonDeg]}
            pathOptions={{ color: 'red' }}
            radius={e.acc}
          />
        ))}
        {data && <Polyline positions={data.map(x => [x.latDeg, x.lonDeg])} />}
        <CircleMarker center={position} pathOptions={{ color: 'green' }} radius={50} />
        {data && curIdx && <CircleMarker center={[data[curIdx].latDeg, data[curIdx].lonDeg]} pathOptions={{ color: 'black' }} radius={2} />}
        <ScaleControl position="bottomright" />
        <UpdatePosition position={position} />
      </MapContainer>
    </>
  );
}

export default Map;
