import React from "react";

class NavItem extends React.Component {
  render() {
    return (
      <a className="mdl-navigation__link" href="">
        <i
          className="mdl-color-text--blue-grey-400 material-icons"
          role="presentation"
        >
          home
        </i>
        Home
      </a>
    );
  }
}

export default NavItem;
