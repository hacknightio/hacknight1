import React from "react";
import mapboxgl from "mapbox-gl";

export const accessToken =
  "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A";

mapboxgl.accessToken = accessToken;

const mapStyle = {
  padding: "10px",
  margin: "0px",
  height: "25vh",
  width: "25vw"
};

class Map extends React.Component {
  componentDidMount() {
    const {
      center = [-0.481747846041145, 51.3233379650232],
      zoom = 9
    } = this.props;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v10",
      center: center,
      zoom: zoom || 9
    });

    map.addControl(new mapboxgl.NavigationControl());
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <div ref={el => (this.mapContainer = el)} className={mapStyle} />;
  }
}

export default Map;
