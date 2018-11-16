import React from "react";

class CustomTaskInfoPanelItem extends React.Component<any, MyState> {
  render() {
    return (
      <div>
        <br />
        <hr />
        <h1>STEPS FOR TASK SUCCESS</h1>
        <ol>
          <li>Answer the task</li>
          <li>Locate the customer's order in ERP</li>
          <li>Find relevant account details and address</li>
          <li>Resolve the customer's issue or udpate shipping status</li>
          <li>Complete the task and request feedback</li>
        </ol>
      </div>
    );
  }
}

export default CustomTaskInfoPanelItem;
