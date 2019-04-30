import React from "react";
import FlightsList from "./FlightsList";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TotalCost from "../../../misc/TotalCost";
import NextButton from "../../../misc/NextButton";

const ConnectedFlightsContainer = props => {
  const { tripType, date, airport } = props;

  return (
    <>
      <div className="cost-button-block">
        <TotalCost cost="100$" />
        <NextButton link="/booking/seat" />
      </div>

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
