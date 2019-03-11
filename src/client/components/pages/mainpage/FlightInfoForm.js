import React, { Component } from "react";
import DatePickerBlock from "./DatePickerBlock";
import OneWayReturnChoice from "./OneWayReturnChoice";
import DestinationBlock from "./DestinationBlock";
import Stepper from "./Stepper";

export class FlightInfoForm extends Component {
  render() {
    return (
      <div className="flight-info">
        <OneWayReturnChoice />
        <DestinationBlock />
        <DatePickerBlock />
        <div className="content">
          <Stepper age="adult" />
          <Stepper age="child" />
        </div>
        <button className="search-button">Search</button>
      </div>
    );
  }
}

export default FlightInfoForm;
