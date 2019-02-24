import React from "react";

class AccountHeader extends React.Component {
  render() {
    return (
      <header className="demo-drawer-header">
        <img src="images/user.jpg" className="demo-avatar" />
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
        </div>
      </header>
    );
  }
}

export default AccountHeader;
