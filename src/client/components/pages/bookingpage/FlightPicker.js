import React, { Component } from "react";
import FlightDetailsBlock from "./FlightDetailsBlock";

export class FlightPicker extends Component {
  render() {
    return (
      <div className="flight-picker">
        {/* date bar should be here */}

        {/* the nubmer of these componenets == nubmer of flights */}
        <FlightDetailsBlock />
      </div>
    );
  }
}

export default FlightPicker;
