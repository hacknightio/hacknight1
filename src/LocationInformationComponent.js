import React from "react";
import CustomMapCMSReplace from "./CustomMapCMSReplace";

const mapDetailsStyle = {
  padding: "10px",
  margin: "0px",
  color: "#fff",
  background: "#000"
};

export default ({ center, zoom }) => (
  <div>
    <div style={mapDetailsStyle}>
      {`Longitude: ${center && center[0]} Latitude: ${center &&
        center[1]} Zoom: ${zoom}`}
    </div>
    <CustomMapCMSReplace
      longitude={center && center[0]}
      latitude={center && center[1]}
      zoom={zoom}
    />
  </div>
);
