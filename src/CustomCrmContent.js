import React, { Component } from "react";
import NumberInformationComponent from "./NumberInformationComponent";
import LocationInformationComponent from "./LocationInformationComponent";

const numVeryifyUrl =
  "http://apilayer.net/api/validate?access_key=e18ed9c6e2ffc48d1dc262fb1cb6ebe2&number=";

export default class CustomCrmContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidUpdate(prevProps) {
    if (this.props.task !== prevProps.task) {
      const phoneNumber =
        this.props &&
        this.props.task &&
        this.props.task.attributes &&
        this.props.task.attributes.name;
      if (phoneNumber) {
        const blah = await fetch(`${numVeryifyUrl}${phoneNumber}`);
        const numVerify = await blah.json();
        this.setState({ numVerify });
        // fetch map data
      }
    }
  }

  render() {
    return (
      <div>
        <NumberInformationComponent
          {...this.state.numVerify}
          key="number-info"
        />
        <LocationInformationComponent
          key="location-info"
          {...this.props}
          center={this.props.center}
          zoom={this.props.zoom}
        />
      </div>
    );
  }
}
