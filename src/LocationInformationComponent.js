import React from "react";

const mapDetailsStyle = {
  padding: "10px",
  margin: "0px",
  color: "#fff",
  background: "#000"
};

export default ({
  center = [-0.481747846041145, 51.3233379650232],
  zoom = 9
}) => (
  <div style={mapDetailsStyle}>{`Longitude: ${center[0]} Latitude: ${
    center[1]
  } Zoom: ${zoom}`}</div>
);
