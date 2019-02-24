import React from "react";
import GraphChart from "./GraphChart";

class GraphContainer extends React.Component {
  render() {
    return (
      <div className="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
        <GraphChart />
        <svg fill="currentColor" viewBox="0 0 500 250" className="demo-graph">
          <use xlinkHref="#chart" />
        </svg>
      </div>
    );
  }
}

export default GraphContainer;
