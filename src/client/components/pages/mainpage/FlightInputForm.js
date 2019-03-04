import React, { Component } from "react";
import DatePickerBlock from "./DatePickerBlock";
export class FlightInputForm extends Component {
  render() {
    return (
      <div className="flight-info">
        <DatePickerBlock />
      </div>
    );
  }
}

export default FlightInputForm;
