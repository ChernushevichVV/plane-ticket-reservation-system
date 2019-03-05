import React, { Component } from "react";
import DatePickerBlock from "./DatePickerBlock";
import OneWayReturnChoice from "./OneWayReturnChoice";
export class FlightInputForm extends Component {
  render() {
    return (
      <div className="flight-info">
        <OneWayReturnChoice />
        <DatePickerBlock />
      </div>
    );
  }
}

export default FlightInputForm;
