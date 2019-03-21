import React from "react";
import FlightPicker from "./FlightPicker";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ConnectedFlightPicker = props => {
  return (
    <>
      <FlightPicker
        date={props.departureDate}
        airport={props.outboundAirport}
      />
      {props.tripType === "return" ? (
        <FlightPicker date={props.returnDate} airport={props.inboundAirport} />
      ) : (
        ""
      )}
    </>
  );
};

ConnectedFlightPicker.propTypes = {
  tripType: PropTypes.string,
  returnDate: PropTypes.object,
  departureDate: PropTypes.object,
  outboundAirport: PropTypes.string,
  inboundAirport: PropTypes.string
};

const mapStateToProps = state => {
  return {
    tripType: state.tripType,
    returnDate: state.returnDate,
    departureDate: state.departureDate,
    outboundAirport: state.outboundAirport,
    inboundAirport: state.inboundAirport
  };
};

const FlightPickerBlock = connect(mapStateToProps)(ConnectedFlightPicker);

export default FlightPickerBlock;
