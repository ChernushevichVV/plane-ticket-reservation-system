import React, { Component } from "react";
import FlightInfoForm from "./FlightInfoForm";
import BookingBar from "../bookingpage/BookingBar";
import FlightPicker from "../bookingpage/FlightPicker";
import { Route } from "react-router-dom";

export class Section extends Component {
  render() {
    return (
      <div className="section">
        <Route path="/booking" component={BookingBar} />
        {/* there should be 1 or 2 pickers depends on tripType
        //  and page should be responsive to their height
        */}
        <Route path="/booking" component={FlightPicker} />

        <Route exact path="/" component={FlightInfoForm} />
      </div>
    );
  }
}

export default Section;
