import React from "react";
import GraphChart from "./GraphChart";
import { ReactComponent as LineChartImage } from "../images/LineChart.svg";

class GraphContainer extends React.Component {
  render() {
    return (
      <div className="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
        <GraphChart />
        <GraphChart />
        <LineChartImage />
      </div>
    );
  }
}

export default GraphContainer;
