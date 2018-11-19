import { FlexPlugin } from "flex-plugin";
import React from "react";
import CustomTaskListComponent from "./CustomTaskListComponent";
import CustomTaskInfoPanelItem from "./CustomTaskInfoPanelItem";
import CustomMapCMSReplace, { accessToken } from "./CustomMapCMSReplace";
import CustomCrmContent from "./CustomCrmContent";
// import NumberInformationComponent from "./NumberInformationComponent";
// import LocationInformationComponent from "./LocationInformationComponent";

const PLUGIN_NAME = "Hacknight1Plugin";

const mapBoxGeoUrl = () =>
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
    this.state.data.location
  )}.json?access_token=${accessToken}&country=${
    this.state.data.country_code
  }&autocomplete=true&limit=1`;

/* <link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />; */

export default class Hacknight1Plugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
    this.state = {
      data: { location: "Salt Lake City", country_code: "US" },
      center: [-111.8904, 40.767],
      match: {
        type: "FeatureCollection",
        query: ["salt", "lake", "city"],
        features: [
          {
            id: "place.11659519155508240",
            type: "Feature",
            place_type: ["place"],
            relevance: 1,
            properties: {
              wikidata: "Q23337"
            },
            text: "Salt Lake City",
            place_name: "Salt Lake City, Utah, United States",
            bbox: [
              -112.176070665723,
              40.5770690001977,
              -111.553103050872,
              40.9220496017179
            ],
            center: [-111.8904, 40.767],
            geometry: {
              type: "Point",
              coordinates: [-111.8904, 40.767]
            },
            context: [
              {
                id: "region.216168",
                short_code: "US-UT",
                wikidata: "Q829",
                text: "Utah"
              },
              {
                id: "country.3145",
                short_code: "us",
                wikidata: "Q30",
                text: "United States"
              }
            ]
          }
        ],
        attribution:
          "NOTICE: © 2018 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare."
      }
    };
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
    // flex.CRMContainer.defaultProps.uriCallback = task =>
    //   fetch(`${numVeryifyUrl}${task.attributes.name}`)
    //     .then(response => response.JSON())
    //     .then(data => this.setState({ data }))
    //     .then(() =>
    //       fetch(mapBoxGeoUrl)
    //         .forwardGeocode({
    //           query: this.state.data.location,
    //           countries: [this.state.data.country_code],
    //           limit: 1
    //         })
    //         .send()
    //         .then(response => response.body)
    //         .catch(e => console.log(e))
    //     )
    //     .catch(e => console.log(e));
    flex.CRMContainer.Content.replace(
      <CustomCrmContent {...this.state} key="custom-crm" />
    );
  }
}
