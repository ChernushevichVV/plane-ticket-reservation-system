import React, { Component } from "react";
import DatePickerBlock from "./DatePickerBlock";
import OneWayReturnChoice from "./OneWayReturnChoice";
import DestinationBlock from "./DestinationBlock";

export class FlightInfoForm extends Component {
  render() {
    return (
      <div className="flight-info">
        <OneWayReturnChoice />
        <DestinationBlock />
        <DatePickerBlock />
      </div>
    );
  }
}

export default FlightInfoForm;
