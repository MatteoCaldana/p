import { LayersControl, MapContainer, TileLayer, CircleMarker, Circle, Polyline } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css';

import FullscreenControl from './FullscreenControl';
import { MAP_OVERLAYS, MAP_TILES } from './mapTiles'

const meanPosition = (data) =>
  data.map(x => [x.latitude, x.longitude])
    .reduce((a, b) => [a[0] + b[0], a[1] + b[1]])
    .map(x => x / data.length)


const DataOverlay = ({ data }) => {
  if (data && data[0] && data[0].accuracy) {
    if (data.length === 1) {
      return (
        <>
          <CircleMarker center={[data[0].latitude, data[0].longitude]} radius={3} />
          <Circle center={[data[0].latitude, data[0].longitude]} radius={data[0].accuracy} />
        </>
      );
    } else {
      // TODO: color polyline based on scalar field
      // TODO: show accuracy
      return <Polyline positions={data.map(x => [x.latitude, x.longitude])} />;
      // return (
      //   <>
      //     {data.map((x, i) =>
      //       <Circle key={i} center={[x.latitude, x.longitude]} radius={x.accuracy} pathOptions={{ color: colormap['RdGr'](x.ele_norm) }} />
      //     )}
      //   </>
      // );
    }
  }
  return <></>;
}


const ChangeViewOnCenterChange = ({ center }) => {
  const map = useMap();
  const old_center = map.getCenter();
  const diff = [old_center.lat - center[0], old_center.lng - center[1]];
  if (diff[0] * diff[0] + diff[1] * diff[1] > 1e-3)
    map.setView(center, map.getZoom());
  return null;
}

const MapBox = ({ data, hoverPointIdx }) => {
  const center = meanPosition(data);
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: 400, width: "100%" }}
    >
      <ChangeViewOnCenterChange center={center} />
      <DataOverlay data={data} />
      {hoverPointIdx && <CircleMarker center={[data[hoverPointIdx].latitude, data[hoverPointIdx].longitude]} radius={2} color='black' />}
      <FullscreenControl />
      <LayersControl position="topright">
        {
          MAP_TILES.map((m, i) =>
            <LayersControl.BaseLayer key={i} checked={i === 0} name={m.name}>
              <TileLayer
                attribution={m.attribution}
                url={m.url}
              />
            </LayersControl.BaseLayer>
          )
        }
        {
          MAP_OVERLAYS.map((m, i) =>
            <LayersControl.Overlay key={i} name={m.name}>
              <TileLayer
                attribution={m.attribution}
                url={m.url}
              />
            </LayersControl.Overlay>
          )
        }
      </LayersControl>
    </MapContainer>
  );
}

export default MapBox;