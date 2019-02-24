import React from "react";
import AccountHeader from "./AccountHeader";
import Nav from "./Nav";

class SideBarContainer extends React.Component {
  render() {
    return (
      <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <AccountHeader />
        <Nav />
      </div>
    );
  }
}

export default SideBarContainer;
