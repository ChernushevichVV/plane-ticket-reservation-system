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
        <div className="flight-info__row">
          <OneWayReturnChoice />
        </div>
        <div className="flight-info__row">
          <AirportPickerBlock />
        </div>
        <div className="flight-info__row">
          <DatePickerBlock />
        </div>
        <div className="flight-info__row">
          <StepperBlock />
        </div>
        <div className="flight-info__row">
          <div className="flight-info__button">
            <button className="button search-button" type="submit">
              <LinkContainer link="/booking/flight" label="Search" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default FlightInfoForm;
