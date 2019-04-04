import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NextButton = ({ link }) => {
  return (
    <button className="next-button">
      <Link to={link} className="button-link next-button__link">
        Next
      </Link>
    </button>
  );
};

NextButton.propTypes = {
  link: PropTypes.string
};

export default NextButton;
