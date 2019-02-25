import React from "react";
import PieChart from "./PieChart";
import { ReactComponent as PieChartImage } from "../images/PieChart.svg";

class ChartContainer extends React.Component {
  render() {
    return (
      <div className="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
        <PieChart value="80"/>
        <PieChart value="90"/>
        <PieChart value="100"/>
        <PieChart value="110"/>
        <PieChartImage />
      </div>
    );
  }
}

export default ChartContainer;
