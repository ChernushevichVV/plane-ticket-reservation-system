import React from "react";
import PropTypes from "prop-types";
import Seat from "./Seat";

const Legend = props => {
  return (
    <div className="legend">
      Seat information
      <hr />
      <div className="legend__seat">
        <Seat status="available" />
        <span className="legend__span"> - available</span>
      </div>
      <hr />
      <div className="legend__seat">
        <Seat status="reserved" />
        <span className="legend__span"> - reserved</span>
      </div>
      <hr />
      <div className="legend__seat">
        <Seat status="selected" />
        <span className="legend__span"> - selected</span>
      </div>
    </div>
  );
};

Legend.propTypes = {};

export default Legend;
