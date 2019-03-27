import React, { Component } from "react";
import DatePickerBlock from "./DatePickerBlock";
import OneWayReturnChoice from "./OneWayReturnChoice";
import AirportPickerBlock from "./AirportPickerBlock";
import StepperBlock from "./StepperBlock";
import { Link } from "react-router-dom";

class FlightInfoForm extends Component {
  render() {
    return (
      <div className="flight-info">
        <OneWayReturnChoice />
        <AirportPickerBlock />
        <DatePickerBlock />
        <StepperBlock />
        <button className="search-button button">
          <Link to="/booking" className="search-button__link">
            Search
          </Link>
        </button>
      </div>
    );
  }
}

export default FlightInfoForm;
