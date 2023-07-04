import React, { useState, useEffect } from 'react';

import useGeolocation from "react-hook-geolocation";
import MapBox from './MapBox';
import UploadFile from './UploadFile';
import DataPlot from './DataPlot';

const GeolocationStats = ({ geolocation }) => {
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
    <p>Geolocation is not available, sorry.</p>
  );
};

const Maps = () => {
  const geolocation = useGeolocation({ enableHighAccuracy: true });
  const [dataGPX, setDataGPX] = useState([{ latitude: 44.4642, longitude: 9.1900 }]);
  useEffect(() => {
    if (dataGPX.length === 1 && !geolocation.error && geolocation.latitude) {
      setDataGPX([geolocation]);
    }
  }, [geolocation])
  console.log(dataGPX)
  return (
    <>
      <UploadFile setData={setDataGPX} />
      <GeolocationStats geolocation={geolocation} />
      <MapBox data={dataGPX} />
      <DataPlot data={dataGPX} />
    </>
  );
}

export default Maps;
