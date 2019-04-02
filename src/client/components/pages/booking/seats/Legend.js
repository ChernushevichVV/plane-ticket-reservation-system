import React from "react";
//import PropTypes from "prop-types";
//import Seat from "./Seat";

const Legend = () => {
  return (
    <div className="legend">
      Seat information
      <hr />
      <div className="legend__seat">
        <div className="seat" />
        <span className="legend__span"> - available</span>
      </div>
      <hr />
      <div className="legend__seat">
        <div className="seat seat_reserved" />
        <span className="legend__span"> - reserved</span>
      </div>
      <hr />
      <div className="legend__seat">
        <div className="seat seat_selected" />
        <span className="legend__span"> - selected</span>
      </div>
    </div>
  );
};

//Legend.propTypes = {};

export default Legend;
