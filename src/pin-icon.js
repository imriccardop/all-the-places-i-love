import L from 'leaflet';
import pin from './pin-map.svg';
import './app-icon.css';


const pinIconFile = './pin-map.svg';
var path = "";
const pinIconPath = path + pinIconFile;

const pinIcon = new L.Icon({
    iconUrl: pin,
    iconRetinaUrl: pin,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(48, 48),
    className: 'leaflet-div-icon'
});

export default pinIcon;