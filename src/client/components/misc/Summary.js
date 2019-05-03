import React from "react";
import PropTypes from "prop-types";

const Summary = props => {
  return (
    <div className="summary">
      <p>Date</p>
      <p>Passengers</p>
      Total cost: {props.cost}
    </div>
  );
};

Summary.propTypes = {
  cost: PropTypes.string
};

export default Summary;
