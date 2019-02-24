import React from "react";

class HomeHeader extends React.Component {
  render() {
    return (
      <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Home</span>
          <div className="mdl-layout-spacer" />
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
            <label
              className="mdl-button mdl-js-button mdl-button--icon"
              htmlFor="search"
            >
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" id="search" />
              <label className="mdl-textfield__label" htmlFor="search">
                Enter your query...
              </label>
            </div>
          </div>
          <button
            className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
            id="hdrbtn"
          >
            <i className="material-icons">more_vert</i>
          </button>
        </div>
      </header>
    );
  }
}

export default HomeHeader;
