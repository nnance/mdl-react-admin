import React from "react";

interface IProps {
  icon?: "home" | "inbox" | "delete" | "report" | "forum" | "flag" | "local_offer" | "shopping_cart" | "people" | "help_outline";
  title?: string;
}

class NavItem extends React.Component <IProps> {
  public static defaultProps: Partial<IProps> = {
    icon: "home",
    title: "Home",
  };

  render() {
    return (
      <a className="mdl-navigation__link" href="">
        <i
          className="mdl-color-text--blue-grey-400 material-icons"
          role="presentation"
        >
          {this.props.icon}
        </i>
        {this.props.title}
      </a>
    );
  }
}

export default NavItem;
