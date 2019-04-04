import React from "react";
import PropTypes from "prop-types";

const DateItem = ({ time }) => {
  const options = { weekday: "short", day: "numeric", month: "short" };
  const date = new Date(time)
    .toLocaleDateString("en-EN", options)
    .replace(",", "");

  return (
    <div className="date-item">
      <a>{date}</a>
    </div>
  );
};

DateItem.propTypes = {
  time: PropTypes.number
};

export default DateItem;
