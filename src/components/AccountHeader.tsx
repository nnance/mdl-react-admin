import React from "react";
import user from '../images/user.jpg';
import AccountMenu from "./AccountMenu";

class AccountHeader extends React.Component {
  render() {
    return (
      <header className="demo-drawer-header">
        <img src={user} className="demo-avatar" />
        <AccountMenu />
      </header>
    );
  }
}

export default AccountHeader;
