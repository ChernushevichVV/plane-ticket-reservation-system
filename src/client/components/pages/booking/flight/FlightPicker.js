import React, { Component } from "react";
import FlightDetailsBlock from "./FlightDetailsBlock";
import DateCarousel from "./DateCarousel";
import TotalCost from "../../../misc/TotalCost";
import PropTypes from "prop-types";

export class FlightPicker extends Component {
  render() {
    return (
      <div className="flight-picker">
        <DateCarousel date={this.props.date} />
        {/* the nubmer of these componenets == nubmer of flights */}
        <FlightDetailsBlock />
        <FlightDetailsBlock />

        <div className="flight-picker__cost-button-block">
          <TotalCost cost="100$" />
          <button className="flight-picker__button button">Next</button>
        </div>
      </div>
    );
  }
}

export default FlightPicker;
