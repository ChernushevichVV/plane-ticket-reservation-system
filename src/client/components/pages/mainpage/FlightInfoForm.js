import React, { Component } from "react";
import DatePickerBlock from "./DatePickerBlock";
import OneWayReturnChoice from "./OneWayReturnChoice";
import AirportPickerBlock from "./AirportPickerBlock";
import Stepper from "./Stepper";
import { Link } from "react-router-dom";

export class FlightInfoForm extends Component {
  render() {
    return (
      <div className="flight-info">
        <OneWayReturnChoice />
        <AirportPickerBlock />
        <DatePickerBlock />
        <div className="content">
          <Stepper label="Adult(18+)" minValue={1} />
          <Stepper label="Child(0-18)" minValue={0} />
        </div>
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
