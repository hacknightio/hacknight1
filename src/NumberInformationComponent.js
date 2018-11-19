import React from "react";

const taskListStyles = {
  padding: "10px",
  margin: "0px",
  color: "#fff",
  background: "#000"
};

const regex = /^(\d{1})(\d{3})(\d{3})(\d{4})$/gm;
const subst = `$1($2) $3-$4`;

const NumberInformationComponent = ({ number, valid, carrier, line_type }) => {
  if (!number)
    return (
      <div style={taskListStyles}>
        Please Select a Task To See More Information
      </div>
    );
  return (
    <div style={taskListStyles}>
      Phone Number:{" " + number.replace(regex, subst) + ". "}Phone number
      {valid ? "is" : "is not"} valid on the {carrier} network, and
      {line_type === "mobile"
        ? " accepts texts because it's a mobile phone"
        : " does not accept texts."}
    </div>
  );
};

export default NumberInformationComponent;
