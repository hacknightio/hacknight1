import React from "react";
import NumberInformationComponent from "./NumberInformationComponent";
import LocationInformationComponent from "./LocationInformationComponent";

export default props => {
  const phone = props && props.task && props.task.attributes;
  return (
    <div>
      <NumberInformationComponent {...props} key="number-info" />
      <LocationInformationComponent
        key="location-info"
        {...props}
        center={props.center}
        zoom={props.zoom}
      />
    </div>
  );
};
