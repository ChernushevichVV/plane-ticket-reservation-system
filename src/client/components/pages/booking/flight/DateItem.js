import React from "react";
import PropTypes from "prop-types";

const DateItem = ({ time }) => {
  const options = { weekday: "short", day: "numeric", month: "short" };
  const date = new Date(time);
  return (
    <div className="date-item">
      <a>{date.toLocaleDateString("en-EN", options).replace(",", "")}</a>
    </div>
  );
};

DateItem.propTypes = {
  time: PropTypes.number
};

export default DateItem;
