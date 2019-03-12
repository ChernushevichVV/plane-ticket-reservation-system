import React, { Component } from "react";
import DatePickerBlock from "./DatePickerBlock";
import OneWayReturnChoice from "./OneWayReturnChoice";
import DestinationBlock from "./DestinationBlock";
import Stepper from "./Stepper";

export class FlightInfoForm extends Component {
  state = {
    isReturnChecked: true
  };

  changeState = () => {
    this.setState((state, props) => {
      return { isReturnChecked: !state.isReturnChecked };
    });
  };

  render() {
    return (
      <div className="flight-info">
        <OneWayReturnChoice onWaysChanged={this.changeState} />
        <DestinationBlock />
        <DatePickerBlock isReturnChecked={this.state.isReturnChecked} />
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
