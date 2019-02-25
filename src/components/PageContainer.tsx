import React from "react";
import HomeHeader from "./HomeHeader";
import SideBarContainer from "./SideBarContainer";
import BodyContainer from "./BodyContainer";

class PageContainer extends React.Component {
  render() {
    return (
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <HomeHeader />
        <SideBarContainer />
        <BodyContainer />
      </div>
    );
  }
}

export default PageContainer;
