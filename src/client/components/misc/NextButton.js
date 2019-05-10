import React from "react";
import PropTypes from "prop-types";
import LinkContainer from "./LinkContainer";

const NextButton = ({ link }) => {
  return (
    <button className="next-button button">
      <LinkContainer link={link} label="Next" />
    </button>
  );
};

NextButton.propTypes = {
  link: PropTypes.string
};

export default NextButton;
