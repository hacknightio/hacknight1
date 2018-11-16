import { FlexPlugin } from "flex-plugin";
import React from "react";
import CustomTaskListComponent from "./CustomTaskListComponent";
import CustomTaskInfoPanelItem from "./CustomTaskInfoPanelItem";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";

const PLUGIN_NAME = "Hacknight1Plugin";
const accessToken =
  "pk.eyJ1IjoiamFudGF5bG9yIiwiYSI6ImNqb2ppdWRjZDA1bTEzd21uNW1kYzJwNGIifQ.KfkXqIdmLVrxByMnpb57kA";
const geocodingClient = mbxGeocoding({ accessToken: accessToken });

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
    flex.CRMContainer.defaultProps.uriCallback = task => {
      let match = "";
      const data = task
        ? `http://apilayer.net/api/validate?access_key=e18ed9c6e2ffc48d1dc262fb1cb6ebe2&number=${
            task.attributes.name
          }`
        : {};

      geocodingClient
        .forwardGeocode({
          query: data.location,
          countries: [country_code],
          limit: 1
        })
        .send()
        .then(response => {
          match = response.body;
        });

      return `https://api.mapbox.com/v4/mapbox.mapbox-streets-v7/1/0/0.png?access_token=${accessToken}`;
    };
  }
}
