import React from "react";
import FlightsList from "./FlightsList";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Summary from "../../../misc/Summary";
import NextButton from "../../../misc/NextButton";
import FlightRoute from "./FlightRoute";

const ConnectedFlightsContainer = props => {
  const { tripType, date, airport } = props;

  return (
    <>
      <div className="flights-container">
        <FlightRoute from={airport.departure} to={airport.destination} />
        <FlightsList
          date={date.departure}
          departure={airport.departure}
          destination={airport.destination}
        />
      </div>
      {tripType === "return" && (
        <div className="flights-container">
          <FlightRoute from={airport.destination} to={airport.departure} />
          <FlightsList
            date={date.return}
            departure={airport.destination}
            destination={airport.departure}
          />
        </div>
      )}
      <div className="summary-container">
        <Summary cost="100$" />
        <div className="summary-container__button">
          <NextButton link="/booking/seat" />
        </div>
      </div>
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
