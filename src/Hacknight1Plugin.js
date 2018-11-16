import { FlexPlugin } from "flex-plugin";
import React from "react";
import CustomTaskListComponent from "./CustomTaskListComponent";
import CustomTaskInfoPanelItem from "./CustomTaskInfoPanelItem";
import NumberInformationComponent from "./NumberInformationComponent";

const PLUGIN_NAME = "Hacknight1Plugin";

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
    flex.CRMContainer.Content.add(
      <NumberInformationComponent key="number-info" />
    );
    flex.CRMContainer.defaultProps.uriCallback = task => {
      return task
        ? "https://www.bing.com/search?q=" + task.attributes.name
        : "https://bing.com/";
    };
  }
}
