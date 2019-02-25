import React from "react";

interface Props {
  value: string
}

class PieChart extends React.Component<Props> {
  render() {
    return (
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
          {this.props.value}
          <tspan fontSize="0.2" dy="-0.07">
            %
          </tspan>
        </text>
      </svg>
    );
  }
}

export default PieChart;
