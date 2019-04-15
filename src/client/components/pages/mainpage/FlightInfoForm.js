import React, { Component } from "react";
import DatePickerBlock from "./DatePickerBlock";
import OneWayReturnChoice from "./OneWayReturnChoice";
import AirportPickerBlock from "./AirportPickerBlock";
import StepperBlock from "./StepperBlock";
import LinkContainer from "../../misc/LinkContainer";

class FlightInfoForm extends Component {
  render() {
    return (
      <form className="flight-info">
        <OneWayReturnChoice />
        <AirportPickerBlock />
        <DatePickerBlock />
        <StepperBlock />
        <button className="button search-button" type="submit">
          <LinkContainer link="/booking/flight" label="Search" />
        </button>
      </form>
    );
  }
}

export default FlightInfoForm;
