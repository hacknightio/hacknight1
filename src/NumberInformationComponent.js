import React from "react";

const taskListStyles = {
  padding: "10px",
  margin: "0px",
  color: "#fff",
  background: "#000"
};

const NumberInformationComponent = props => {
  const foo =
    props && props.task && props.task.attributes && props.task.attributes.name;
  return <div style={taskListStyles}>Phone Number: {foo ? foo : ""}</div>;
};

export default NumberInformationComponent;
