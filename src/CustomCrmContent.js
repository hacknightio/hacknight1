import React, { Component } from "react";
import NumberInformationComponent from "./NumberInformationComponent";
import LocationInformationComponent from "./LocationInformationComponent";
export const accessToken =
  "pk.eyJ1IjoiamFudGF5bG9yIiwiYSI6ImNqb2ppdWRjZDA1bTEzd21uNW1kYzJwNGIifQ.KfkXqIdmLVrxByMnpb57kA";

/* Now we know we would never post API codes, but we can reset these and it's on trial accounts :) */
const numVeryifyUrl =
  "http://apilayer.net/api/validate?access_key=e18ed9c6e2ffc48d1dc262fb1cb6ebe2&number=";

export default class CustomCrmContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numVerify: {},
      location: {}
    };
  }

  mapBoxGeoUrl = numVerify =>
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
      numVerify.location
    )}.json?access_token=${accessToken}&country=${
      numVerify.country_code
    }&autocomplete=true&limit=1`;

  async componentDidUpdate(prevProps) {
    if (this.props.task !== prevProps.task) {
      const phoneNumber =
        this.props &&
        this.props.task &&
        this.props.task.attributes &&
        this.props.task.attributes.name;
      if (phoneNumber) {
        try {
          const numVerifyRequest = await fetch(
            `${numVeryifyUrl}${phoneNumber}`
          );
          const numVerify = await numVerifyRequest.json();
          this.setState({ numVerify });
          // fetch map data
          const mapBoxGeoRequest = await fetch(
            this.mapBoxGeoUrl(this.state.numVerify)
          );
          const mapBoxLocation = await mapBoxGeoRequest.json();
          this.setState({ location: mapBoxLocation.features[0] });
        } catch (e) {
          console.log(e);
        }
      }
    }
  }

  render() {
    if (!this.state.numVerify.number) return null;
    return (
      <div>
        <NumberInformationComponent
          {...this.state.numVerify}
          key="number-info"
        />
        <LocationInformationComponent
          key="location-info"
          {...this.props}
          center={this.state.location.center}
        />
      </div>
    );
  }
}
