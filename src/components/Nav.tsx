import React from "react";
import NavItem from "./NavItem";
import NavSpacer from "./NavSpacer";

class Nav extends React.Component {
  render() {
    return (
      <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
        <NavItem icon="home" title="Home"/>
        <NavItem icon="inbox" title="Inbox"/>
        <NavItem icon="delete" title="Trash"/>
        <NavItem icon="report" title="Spam"/>
        <NavItem icon="forum" title="Forums"/>
        <NavItem icon="flag" title="Updates"/>
        <NavItem icon="local_offer" title="Promos"/>
        <NavItem icon="shopping_cart" title="Purchases"/>
        <NavItem icon="people" title="Social"/>
        <NavSpacer />
        <NavItem icon="help_outline" title="Help"/>
      </nav>
    );
  }
}

export default Nav;
