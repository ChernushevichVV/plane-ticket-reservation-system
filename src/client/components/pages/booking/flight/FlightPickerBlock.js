import React from "react";
import FlightPicker from "./FlightPicker";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ConnectedFlightPicker = props => {
  return (
    <>
      <FlightPicker
        date={props.departureDate}
        outbound={props.outboundAirport}
        inbound={props.inboundAirport}
      />
      {props.tripType === "return" ? (
        <FlightPicker
          date={props.returnDate}
          inbound={props.outboundAirport}
          outbound={props.inboundAirport}
        />
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
