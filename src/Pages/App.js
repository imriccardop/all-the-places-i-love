import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './App.css';
import { placeInfoList } from './pin-list.js';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


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
  if(placeInfo.type === 'PUB'){
    return customIconPub;
  }
  if(placeInfo.type === 'SHOP'){
    return customIconShop;
  }
  if(placeInfo.type === 'OTHERS'){
    return customIconOther;
  }
}

function findCustonBedgeClass(placeInfo){
  if(placeInfo.type === 'PUB'){
    return "custom-bedge custom-bedge_pub_color";
  }
  if(placeInfo.type === 'SHOP'){
    return "custom-bedge custom-bedge_shop_color";
  }
  if(placeInfo.type === 'OTHERS'){
    return "custom-bedge custom-bedge_other_color";
  }
}

function findWebsite(placeInfo){
  if(typeof placeInfo.website === 'undefined' || placeInfo.website === null || placeInfo.website.length === 0){
    return <div></div>;
  }
  return <a href={placeInfo.website} target="_blank" rel="noreferrer" >Website</a>;
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
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#">All the places I love</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">?</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <div className='leaflet-container'>
      <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={true}>
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
                  <span className={findCustonBedgeClass(e)}>{e.type}</span>
                  <h5>{e.title} </h5>
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
    </div>
    </>
  );
}

export default App;
