import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const accessToken =
  "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A";

const MapStyle = {
  padding: "10px",
  margin: "0px",
  height: "50vh",
  width: "50vw"
};

export default ({
  position = [-0.481747846041145, 51.3233379650232],
  zoom = 9
}) => (
  <Map style={MapStyle} accessToken={accessToken} center={position} zoom={zoom}>
    <TileLayer url="<url>" attribution="<attribution>" />
    />
    <Marker position={position}>
      <Popup>Estimatd User Position</Popup>
    </Marker>
  </Map>
);
