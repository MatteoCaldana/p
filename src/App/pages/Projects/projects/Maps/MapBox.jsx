import { MAP_OVERLAYS, MAP_TILES } from './mapTiles'
import { LayersControl, MapContainer, TileLayer, CircleMarker, Circle, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import FullscreenControl from './FullscreenControl';

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
      //return <Polyline positions={data.map(x => [x.latitude, x.longitude])} />;
      return (
        <>
          {data.map(x =>
            <Circle center={[x.latitude, x.longitude]} radius={x.accuracy} pathOptions={{ color: '#FFFFFF' }} />
          )}
        </>
      );
    }
  }
  return <></>;
}

// TODO: show point in plot hover

const MapBox = ({ data }) => {
  return (
    <MapContainer
      center={meanPosition(data)}
      zoom={13}
      style={{ height: 500, width: "100%" }}
    >
      <DataOverlay data={data} />
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