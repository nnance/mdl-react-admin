import React from "react";

class GraphChart extends React.Component {
  render() {
    return (
      <svg fill="currentColor" viewBox="0 0 500 250" className="demo-graph">
        <use xlinkHref="#chart" />
      </svg>
    );
  }
}

export default GraphChart;
