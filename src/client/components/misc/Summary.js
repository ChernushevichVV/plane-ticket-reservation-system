import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NextButton from "./NextButton";
import { getLink, getCurrentStep } from "../pages/booking/utilsBookingBar";

const Summary = props => {
  const { history, date, seats, passenger, tripType } = props;
  const link = getLink(getCurrentStep(history, 1));
  console.log("summary");

  return (
    <div className="summary">
      <p>Departure date: {date.departure.toDateString()}</p>
      {tripType === "return" && (
        <p>Return date: {date.return.toDateString()}</p>
      )}
      <p>Passengers: {passenger.adult}</p>
      {seats.length !== 0 && <p>Seats: {seats.join(", ")}</p>}
      Total cost: 228
      <div className="summary__button">
        <NextButton link={link} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tripType: state.tripType,
    date: state.date,
    seats: state.seats,
    passenger: state.passenger
  };
};

Summary.propTypes = {
  history: PropTypes.object,
  tripType: PropTypes.string,
  date: PropTypes.object,
  passenger: PropTypes.object,
  seats: PropTypes.array
};

export default connect(mapStateToProps)(Summary);
