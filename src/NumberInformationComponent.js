import React from "react";

const taskListStyles = {
  padding: "10px",
  margin: "0px",
  color: "#fff",
  background: "#000"
};

const regex = /^\+(\d{1})(\d{3})(\d{3})(\d{4})$/gm;
const subst = `$1($2) $3-$4`;

const NumberInformationComponent = props => {
  const phone =
    props &&
    props.task &&
    props.task.attributes &&
    props.task.attributes.name &&
    props.task.attributes.name.replace(regex, subst);
  return (
    <div style={taskListStyles}>
      Phone Number: {phone ? phone : " - Please Select a Task First. -"}
    </div>
  );
};

export default NumberInformationComponent;
