import React from "react";
import PropTypes from "prop-types";

const TotalCost = props => {
  return <div className="total-cost">Total cost: {props.cost}</div>;
};

TotalCost.propTypes = {
  cost: PropTypes.string
};

export default TotalCost;
