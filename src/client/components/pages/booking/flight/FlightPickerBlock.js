import React from "react";
import FlightPicker from "./FlightPicker";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ConnectedFlightPicker = props => {
  const { tripType, date, airport } = props;

  return (
    <>
      <FlightPicker
        date={date.departure}
        departure={airport.departure}
        destination={airport.destination}
      />
      {tripType === "return" && (
        <FlightPicker
          date={date.return}
          departure={airport.destination}
          destination={airport.departure}
        />
      )}
    </>
  );
};

ConnectedFlightPicker.propTypes = {
  tripType: PropTypes.string,
  date: PropTypes.object,
  airport: PropTypes.object
};

const mapStateToProps = state => {
  return {
    tripType: state.tripType,
    date: state.date,
    airport: state.airport
  };
};

const FlightPickerBlock = connect(mapStateToProps)(ConnectedFlightPicker);

export default FlightPickerBlock;
