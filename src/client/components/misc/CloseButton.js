import React from "react";
import PropTypes from "prop-types";

const CloseButton = props => {
  const { onClick } = props;

  return (
    <span onClick={onClick} className="close-button">
      &times;
    </span>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func
};

export default CloseButton;
