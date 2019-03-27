import React from "react";
import PropTypes from "prop-types";

const Stepper = props => {
  const {
    id,
    minValue,
    maxValue,
    label,
    num,
    onIncrement,
    onDecrement
  } = props;

  return (
    <div className="stepper-wrapper">
      <div className="stepper-input">
        <button
          disabled={num <= minValue}
          className="stepper-input__button button"
          onClick={onDecrement}
          id={id}
        >
          -
        </button>
        <input
          readOnly
          type="text"
          value={num}
          className="input stepper-input__input"
        />
        <button
          disabled={num >= maxValue}
          className="stepper-input__button button"
          onClick={onIncrement}
          id={id}
        >
          +
        </button>
      </div>
      <p>{label}</p>
    </div>
  );
};

Stepper.propTypes = {
  id: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  label: PropTypes.string,
  num: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
};

export default Stepper;
