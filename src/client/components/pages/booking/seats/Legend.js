import React from "react";
//import PropTypes from "prop-types";
//import Seat from "./Seat";

const Legend = () => {
  return (
    <div className="legend">
      <p className="legend__p">Seat information</p>
      <hr />
      <div className="legend__seat">
        <div className="seat none-pointer" />
        <span className="legend__span"> - available</span>
      </div>
      <hr />
      <div className="legend__seat">
        <div className="seat seat--reserved none-pointer" />
        <span className="legend__span"> - reserved</span>
      </div>
      <hr />
      <div className="legend__seat">
        <div className="seat seat--selected none-pointer" />
        <span className="legend__span"> - selected</span>
      </div>
    </div>
  );
};

//Legend.propTypes = {};

export default Legend;
