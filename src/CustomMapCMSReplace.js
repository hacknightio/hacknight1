import React from "react";
import mapboxgl from "mapbox-gl";
import MapboxStyle from "mapbox-gl";

export const accessToken =
  "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A";

mapboxgl.accessToken = accessToken;

const mapStyle = {
  padding: "10px",
  margin: "0px",
  height: "50vh",
  width: "50vw"
};

class Map extends React.Component {
  componentDidMount() {
    const { latitude, longitude, zoom } = this.props;
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v10",
      center: [longitude, latitude],
      zoom: zoom
    });
  }

  componentWillUnmount() {
    // map.remove();
  }

  render() {
    return (
      <MapboxStyle>
        <div style={mapStyle}>
          <div id="map-container" />
        </div>
      </MapboxStyle>
    );
  }
}

export default Map;
