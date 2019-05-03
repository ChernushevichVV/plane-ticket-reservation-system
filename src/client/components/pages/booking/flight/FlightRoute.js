import React from "react";
import PropTypes from "prop-types";

const FlightRoute = ({ from, to }) => {
  return (
    <div className="flight-route">
      From {from} to {to}
    </div>
  );
};

FlightRoute.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string
};

export default FlightRoute;
