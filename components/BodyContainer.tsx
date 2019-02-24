import React from "react";
import DemoContainer from "./DemoContainer";

class BodyContainer extends React.Component {
  render() {
    return (
      <main className="mdl-layout__content mdl-color--grey-100">
        <DemoContainer />
      </main>
    );
  }
}

export default BodyContainer;
