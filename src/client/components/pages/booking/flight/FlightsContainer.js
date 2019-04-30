import React from "react";
import FlightsList from "./FlightsList";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ConnectedFlightsContainer = props => {
  const { tripType, date, airport } = props;

  return (
    <>
      <FlightsList
        date={date.departure}
        departure={airport.departure}
        destination={airport.destination}
      />
      {tripType === "return" && (
        <FlightsList
          date={date.return}
          departure={airport.destination}
          destination={airport.departure}
        />
      )}
    </>
  );
};

ConnectedFlightsContainer.propTypes = {
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

const FlightsContainer = connect(mapStateToProps)(ConnectedFlightsContainer);

export default FlightsContainer;
