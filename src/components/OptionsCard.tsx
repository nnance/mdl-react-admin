import React from "react";

class OptionsCard extends React.Component {
  render() {
    return (
      <div className="demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">
        <div className="mdl-card__supporting-text mdl-color-text--blue-grey-50">
          <h3>View options</h3>
          <ul>
            <li>
              <label
                htmlFor="chkbox1"
                className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
              >
                <input
                  type="checkbox"
                  id="chkbox1"
                  className="mdl-checkbox__input"
                />
                <span className="mdl-checkbox__label">Click per object</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="chkbox2"
                className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
              >
                <input
                  type="checkbox"
                  id="chkbox2"
                  className="mdl-checkbox__input"
                />
                <span className="mdl-checkbox__label">Views per object</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="chkbox3"
                className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
              >
                <input
                  type="checkbox"
                  id="chkbox3"
                  className="mdl-checkbox__input"
                />
                <span className="mdl-checkbox__label">Objects selected</span>
              </label>
            </li>
            <li>
              <label
                htmlFor="chkbox4"
                className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
              >
                <input
                  type="checkbox"
                  id="chkbox4"
                  className="mdl-checkbox__input"
                />
                <span className="mdl-checkbox__label">Objects viewed</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a
            href="#"
            className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50"
          >
            Change location
          </a>
          <div className="mdl-layout-spacer" />
          <i className="material-icons">location_on</i>
        </div>
      </div>
    );
  }
}

export default OptionsCard;
