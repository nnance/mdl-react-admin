import React from "react";

class UpdateCard extends React.Component {
  render() {
    return (
      <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
        <div className="mdl-card__title mdl-card--expand mdl-color--teal-300">
          <h2 className="mdl-card__title-text">Updates</h2>
        </div>
        <div className="mdl-card__supporting-text mdl-color-text--grey-600">
          Non dolore elit adipisicing ea reprehenderit consectetur culpa.
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a href="#" className="mdl-button mdl-js-button mdl-js-ripple-effect">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default UpdateCard;
