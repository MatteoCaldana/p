import React, { lazy, useState, useEffect } from 'react';

import useGeolocation from "react-hook-geolocation";

import wrapWithLoading from '../../../../../components/wrapWithLoading';
import MapBox from './MapBox';
import UploadFile from './UploadFile';
import img from "../../../../../assets/projects/gpx.png"

const DataPlot = lazy(() => import("./DataPlot"));

const GeolocationStats = ({ geolocation }) => {
  return (
    <>
      <h4>Geolocation Data:</h4>
      {!geolocation.error ? (
        <ul style={{ columns: 2 }}>
          <li>Latitude: {geolocation.latitude?.toFixed(4)} &#177; {Math.round(geolocation.accuracy)}</li>
          <li>Longitude: {geolocation.longitude?.toFixed(4)} &#177; {Math.round(geolocation.accuracy)}</li>
          <li>Altitude: {geolocation.altitude?.toFixed(1)} &#177; {geolocation.altitudeAccuracy?.toFixed(1)}</li>
          <li>Heading: {geolocation.heading?.toFixed(2)}</li>
          <li>Speed: {geolocation.speed?.toFixed(2)}</li>
          <li>Timestamp: {geolocation.timestamp}</li>
        </ul>
      ) : (
        <p>Geolocation is not available, sorry.</p>
      )}
    </>
  );
};

const SuspenseDataPlot = wrapWithLoading(DataPlot);

const Maps = () => {
  const geolocation = useGeolocation({ enableHighAccuracy: true });
  const [dataGPX, setDataGPX] = useState([{ latitude: 45.4642, longitude: 9.1900 }]);
  const [hoverPointIdx, setHoverPointIdx] = useState(undefined);

  useEffect(() => {
    if (dataGPX.length === 1 && !geolocation.error && geolocation.latitude) {
      setDataGPX([geolocation]);
    }
  }, [geolocation])

  return (
    <>
      <img
        src={img}
        alt={"Usage example"}
        style={{
          maxWidth: "100%",
          width: 600,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      />
      <GeolocationStats geolocation={geolocation} />
      <UploadFile setData={setDataGPX} />
      <MapBox data={dataGPX} hoverPointIdx={hoverPointIdx} />
      {dataGPX && dataGPX.length > 1 && <SuspenseDataPlot data={dataGPX} setHoverPointIdx={setHoverPointIdx} />}
    </>
  );
}

export default Maps;
