import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './App.css';
import { placeInfoList } from './pin-list.js';

const customIconOther = new L.Icon({
  iconUrl: require("./pin-map-other.svg").default,
  iconSize: new L.Point(33, 33)
});

const customIconPub = new L.Icon({
  iconUrl: require("./pin-map-pub.svg").default,
  iconSize: new L.Point(33, 33)
});

const customIconShop = new L.Icon({
  iconUrl: require("./pin-map-shop.svg").default,
  iconSize: new L.Point(33, 33)
});

function findCustomPin(placeInfo){
  if(placeInfo.type == 'PUB'){
    return customIconPub;
  }
  if(placeInfo.type == 'SHOP'){
    return customIconShop;
  }
  if(placeInfo.type == 'OTHERS'){
    return customIconOther;
  }
}

function findWebsite(placeInfo){
  if(placeInfo.website != '' && placeInfo.website != null ){
    return <a href={placeInfo.website} target="_blank">Website</a>;
  }
  return <div></div>;
}

const createClusterCustomIcon = function (cluster) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: L.point(33, 33, true),
  })
}

function App() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}"
        accessToken='st3aBPCmKO0JrdolTgQYPWkzXz4SyNjhMkngNIV3iBYzpHf2ITg79qdG2n381g2S'
      />
      <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
        {
          placeInfoList.map(e => {
            return <Marker icon={findCustomPin(e)} position={[e.latitude, e.longitude]}>
              <Popup>
                <h3>{e.title}</h3>
                <div>{e.description}</div>
                <br />
                <div>{findWebsite(e)}</div>
                <a href={e.gMapUrl} target="_blank">Google Maps</a>

              </Popup>
            </Marker>;
          })
        }
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default App;
