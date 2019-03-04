import React, { Component } from "react";
import DatePickerBlock from "./DatePickerBlock";
export class FlightInputForm extends Component {
  render() {
    return (
      <div className="flight-info">
        <p>FlightInputForm</p>
        <DatePickerBlock />
      </div>
    );
  }
}

export default FlightInputForm;
