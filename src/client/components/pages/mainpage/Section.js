import React, { Component } from "react";
import FlightInfoForm from "./FlightInfoForm";
import BookingBar from "../bookingpage/BookingBar";
import FlightPickerBlock from "../bookingpage/FlightPickerBlock";
import { Route } from "react-router-dom";

export class Section extends Component {
  render() {
    return (
      <div className="section">
        <Route path="/booking" component={BookingBar} />
        <Route path="/booking" component={FlightPickerBlock} />
        <Route exact path="/" component={FlightInfoForm} />
      </div>
    );
  }
}

export default Section;
