import React, { Component } from "react";
import FlightDetailsBlock from "./FlightDetailsBlock";
import DateCarousel from "./DateCarousel";
import TotalCost from "../../../misc/TotalCost";
import NextButton from "../../../misc/NextButton";
import PropTypes from "prop-types";

export class FlightPicker extends Component {
  render() {
    const { date, departure, destination } = this.props;

    return (
      <div className="flight-picker">
        <DateCarousel date={date} />
        {/* the nubmer of these componenets == nubmer of flights */}
        <FlightDetailsBlock from={departure} to={destination} />
        <FlightDetailsBlock from={departure} to={destination} />

        <div className="flight-picker__cost-button-block">
          <TotalCost cost="100$" />
          <NextButton link="nextpage" />
        </div>
      </div>
    );
  }
}

export default FlightPicker;
