import React from "react";
import ChartContainer from "./ChartContainer";
import GraphContainer from "./GraphContainer";
import CardContainer from "./CardContainer";

class DemoContainer extends React.Component {
  render() {
    return (
      <div className="mdl-grid demo-content">
        <ChartContainer />
        <GraphContainer />
        <CardContainer />
      </div>
    );
  }
}

export default DemoContainer;
