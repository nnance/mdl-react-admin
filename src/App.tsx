import React from 'react';
import './App.css';
import HomeHeader from "./components/HomeHeader";
import SideBarContainer from "./components/SideBarContainer";
import BodyContainer from "./components/BodyContainer";

class App extends React.Component {
  public render() {
    return (
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <HomeHeader />
        <SideBarContainer />
        <BodyContainer />
      </div>
    );
  }
}

export default App;