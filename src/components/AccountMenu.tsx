import React from "react";
import ReactDOM from "react-dom"

const accItems = ["hello@example.com", "info@example.com", "Add another account..."]

const listItems = (items: string[]) => items.map((item, index) =>
  <li key={index} className="mdl-menu__item">{item}</li>
)

class AccountHeader extends React.Component {
  componentDidMount() {
    const element = ReactDOM.findDOMNode(this.refs.acctmnu) as Element;
    if (element) {
      element.setAttribute("for", "accbtn");
    }
  }

  render() {
    return (
      <div className="demo-avatar-dropdown">
        <span>hello@example.com</span>
        <div className="mdl-layout-spacer" />
        <button
          id="accbtn"
          className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
        >
          <i className="material-icons" role="presentation">
            arrow_drop_down
          </i>
          <span className="visuallyhidden">Accounts</span>
        </button>
        <ul
          className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
          ref="acctmnu"
        >
          {listItems(accItems)}
        </ul>
      </div>
    );
  }
}

export default AccountHeader;
