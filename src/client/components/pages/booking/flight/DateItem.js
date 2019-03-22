import React from "react";
import PropTypes from "prop-types";

const DateItem = ({ date }) => {
  return (
    <div className="date-item">
      <a>date{date}</a>
    </div>
  );
};

DateItem.propTypes = {};

export default DateItem;
