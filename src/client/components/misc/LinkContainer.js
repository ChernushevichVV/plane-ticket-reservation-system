import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkContainer = ({ link, label }) => {
  return (
    <Link to={link} className="link">
      {label}
    </Link>
  );
};

LinkContainer.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string
};

export default LinkContainer;
