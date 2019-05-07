import React from "react";
import PropTypes from "prop-types";
import NextButton from "./NextButton";
import { getLink, getCurrentStep } from "../pages/booking/utilsBookingBar";

const Summary = props => {
  const { history, cost } = props;
  const link = getLink(getCurrentStep(history, 1));

  return (
    <div className="summary">
      <p>Date</p>
      <p>Passengers</p>
      Total cost: {cost}
      <div className="summary__button">
        <NextButton link={link} />
      </div>
    </div>
  );
};

Summary.propTypes = {
  cost: PropTypes.string,
  history: PropTypes.object
};

export default Summary;
