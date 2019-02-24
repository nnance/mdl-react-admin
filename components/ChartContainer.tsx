import React from "react";
import PieChart from "./PieChart";

class ChartContainer extends React.Component {
  render() {
    return (
      <div className="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
        <PieChart />
        <svg
          fill="currentColor"
          width="200px"
          height="200px"
          viewBox="0 0 1 1"
          className="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop"
        >
          <use xlinkHref="#piechart" mask="url(#piemask)" />
          <text
            x="0.5"
            y="0.5"
            fontFamily="Roboto"
            fontSize="0.3"
            fill="#888"
            textAnchor="middle"
            dy="0.1"
          >
            82
            <tspan dy="-0.07" fontSize="0.2">
              %
            </tspan>
          </text>
        </svg>
        <svg
          fill="currentColor"
          width="200px"
          height="200px"
          viewBox="0 0 1 1"
          className="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop"
        >
          <use xlinkHref="#piechart" mask="url(#piemask)" />
          <text
            x="0.5"
            y="0.5"
            fontFamily="Roboto"
            fontSize="0.3"
            fill="#888"
            textAnchor="middle"
            dy="0.1"
          >
            82
            <tspan dy="-0.07" fontSize="0.2">
              %
            </tspan>
          </text>
        </svg>
        <svg
          fill="currentColor"
          width="200px"
          height="200px"
          viewBox="0 0 1 1"
          className="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop"
        >
          <use xlinkHref="#piechart" mask="url(#piemask)" />
          <text
            x="0.5"
            y="0.5"
            fontFamily="Roboto"
            fontSize="0.3"
            fill="#888"
            textAnchor="middle"
            dy="0.1"
          >
            82
            <tspan dy="-0.07" fontSize="0.2">
              %
            </tspan>
          </text>
        </svg>
      </div>
    );
  }
}

export default ChartContainer;
