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
          <Stepper label="Adult(18+)" minValue={1} />
          <Stepper label="Child(0-18)" minValue={0} />
        </div>
        <button className="search-button button">Search</button>
      </div>
    );
  }
}

export default FlightInfoForm;
