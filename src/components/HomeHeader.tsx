import React from "react";
import ReactDOM from "react-dom";

const headerItems = ["About", "Contact", "Legal information"]

const listItems = (items: string[]) => items.map((item, index) =>
  <li key={index} className="mdl-menu__item">{item}</li>
)

class HomeHeader extends React.Component {
  componentDidMount() {
    const element = ReactDOM.findDOMNode(this.refs.hdrMenu) as Element;
    if (element) {
      element.setAttribute("for", "hdrbtn");
    }
  }

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
          <ul
            className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right"
            ref="hdrMenu"
          >
            {listItems(headerItems)}
          </ul>
        </div>
      </header>
    );
  }
}

export default HomeHeader;
