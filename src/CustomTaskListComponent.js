import React from "react";

const taskListStyles = {
  padding: "10px",
  margin: "0px",
  color: "#fff",
  background: "#000"
};

const CustomTaskListComponent = () => {
  return (
    <div style={taskListStyles}>
      Choose a task below and then see if the phone number is a valid phone
      number and the approx. location on a map to the right.
    </div>
  );
};

export default CustomTaskListComponent;
