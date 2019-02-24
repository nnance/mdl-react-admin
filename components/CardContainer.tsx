import React from "react";
import UpdateCard from "./UpdateCard";
import CardSeparator from "./CardSeparator";
import OptionsCard from "./OptionsCard";

class CardContainer extends React.Component {
  render() {
    return (
      <div className="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
        <UpdateCard />
        <CardSeparator />
        <OptionsCard />
      </div>
    );
  }
}

export default CardContainer;
