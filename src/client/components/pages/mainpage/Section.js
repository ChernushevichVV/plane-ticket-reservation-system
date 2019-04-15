import React, { Component } from "react";
import FlightInfoForm from "./FlightInfoForm";
import BookingBar from "../booking/BookingBar";
import FlightPickerBlock from "../booking/flight/FlightPickerBlock";
import SeatSelection from "../booking/seats/SeatSelection";
import { Route } from "react-router-dom";
import LuggageContainer from "../booking/LuggageContainer";

export class Section extends Component {
  render() {
    return (
      <div className="section">
        <Route path="/booking" component={BookingBar} />
        <Route path="/booking/flight" component={FlightPickerBlock} />
        <Route path="/booking/seat" component={SeatSelection} />
        <Route path="/booking/luggage" component={LuggageContainer} />
        <Route exact path="/" component={FlightInfoForm} />
      </div>
    );
  }
}

export default Section;
