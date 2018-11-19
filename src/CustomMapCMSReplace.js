import React from "react";
import ReactMapboxGl, {
  Layer,
  Feature,
  Popup,
  Marker,
  ZoomControl,
  ScaleControl,
  RotationControl
} from "react-mapbox-gl";
import MapboxStyle from "./mapboxstyle";

let Map;

class CustomMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { map: false };
  }

  componentDidMount() {
    const Map = ReactMapboxGl({
      accessToken:
        "pk.eyJ1IjoiamFudGF5bG9yIiwiYSI6ImNqb29vemoxNjFqNG8zdm5vbzRzdWhzNTQifQ.IJqunAxaC6YTc2MJOW4How",
      injectCSS: false
    });
    this.setState({ map: this.renderMap(Map) });
  }

  renderMap = Map => {
    const {
      longitude: long,
      latitude: lat,
      zoom = 12,
      place_name: name
    } = this.props;
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v10"
        containerStyle={{
          padding: "5px",
          height: "45vh",
          width: "40vw"
        }}
        zoom={[zoom]}
        center={[long, lat]}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[long, lat]} />
        </Layer>
        <Marker coordinates={[long, lat]} anchor="bottom" />
        <Popup
          coordinates={[long, lat]}
          offset={{
            "bottom-left": [12, -38],
            bottom: [0, -38],
            "bottom-right": [-12, -38]
          }}
        >
          <h1>{name}</h1>
        </Popup>
        <RotationControl />
        <ZoomControl />
        <ScaleControl position="bottom-left" />
      </Map>
    );
  };

  render() {
    if (!this.state.map) return null;
    return <div style={{ ...MapboxStyle }}>{this.state.map}</div>;
  }
}

export default CustomMap;
