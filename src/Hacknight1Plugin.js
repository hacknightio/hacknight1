import { FlexPlugin } from "flex-plugin";
import React from "react";
import CustomTaskListComponent from "./CustomTaskListComponent";
import CustomTaskInfoPanelItem from "./CustomTaskInfoPanelItem";
import NumberInformationComponent from "./NumberInformationComponent";
import CustomMap from "./CustomMap";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";

const geocodingClient = mbxGeocoding({ accessToken: accessToken });
const PLUGIN_NAME = "Hacknight1Plugin";

/* <link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />; */

export default class Hacknight1Plugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    flex.AgentDesktopView.Panel1.Content.add(
      <CustomTaskListComponent key="demo-component" />,
      {
        sortOrder: -1
      }
    );
    flex.TaskInfoPanel.Content.add(
      <CustomTaskInfoPanelItem key="steps-for-task" />
    );
    flex.CRMContainer.defaultProps.uriCallback = task =>
      fetch(
        `http://apilayer.net/api/validate?access_key=e18ed9c6e2ffc48d1dc262fb1cb6ebe2&number=${
          task.attributes.name
        }`
      ).then(response =>
        response
          .JSON(data)
          .then(data => this.setState({ data }))
          .then(() =>
            geocodingClient
              .forwardGeocode({
                query: this.state.data.location,
                countries: [this.state.data.country_code],
                limit: 1
              })
              .send()
              .then(response => response.body)
          )
          .catch(e => console.log(e))
      );
    flex.CRMContainer.Content.replace(<CustomMap key="map" zoom={13} />);
    flex.CRMContainer.Content.add(
      <NumberInformationComponent key="number-info" />,
      { sortOrder: 2 }
    );
  }
}
