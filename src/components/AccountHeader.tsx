import React from "react";
import user from '../images/user.jpg';

const items = ["hello@example.com", "info@example.com", "Add another account..."]
const listItems = items.map((item, index) =>
  <li key="{index}" className="mdl-menu__item">{item}</li>
)

const menuList = () =>
  <ul
    className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
    // htmlFor="accbtn"
  >
    {listItems}
  </ul>


class AccountHeader extends React.Component {
  render() {
    return (
      <header className="demo-drawer-header">
        <img src={user} className="demo-avatar" />
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
          {menuList}
        </div>
      </header>
    );
  }
}

export default AccountHeader;
