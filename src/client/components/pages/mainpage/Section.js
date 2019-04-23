import React, { Component } from "react";
import FlightInfoForm from "./FlightInfoForm";
import BookingBar from "../booking/BookingBar";
import FlightPickerBlock from "../booking/flight/FlightPickerBlock";
import SeatSelection from "../booking/seats/SeatSelection";
import { Route } from "react-router-dom";
import LuggageContainer from "../booking/LuggageContainer";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import PropTypes from "prop-types";

export class Section extends Component {
  render() {
    const { showLogin, closeLogin, showSignUp, closeSignUp } = this.props;

    return (
      <div className="section">
        <LogIn show={showLogin} onClick={closeLogin} />
        <SignUp show={showSignUp} onClick={closeSignUp} />
        <Route path="/booking" component={BookingBar} />
        <Route path="/booking/flight" component={FlightPickerBlock} />
        <Route path="/booking/seat" component={SeatSelection} />
        <Route path="/booking/luggage" component={LuggageContainer} />
        <Route exact path="/" component={FlightInfoForm} />
      </div>
    );
  }
}

Section.propTypes = {
  showLogin: PropTypes.bool.isRequired,
  closeLogin: PropTypes.func.isRequired,
  showSignUp: PropTypes.bool.isRequired,
  closeSignUp: PropTypes.func.isRequired
};

export default Section;
