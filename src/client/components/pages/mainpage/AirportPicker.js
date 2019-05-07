import React from "react";
import PropTypes from "prop-types";

const AirportPicker = props => {
  const { airports, placeholder } = props;

  return (
    <div className="airport-picker">
      <label>
        {placeholder}
        <br />
        <input
          className="input"
          type="text"
          name="airports"
          placeholder={placeholder}
          required
          list="airports"
          autoComplete="off"
          onChange={props.onChange}
        />
      </label>
      <datalist id="airports">
        {airports.map(airport => (
          <option key={airport} value={airport}>
            {airport}
          </option>
        ))}
      </datalist>
    </div>
  );
};

AirportPicker.propTypes = {
  placeholder: PropTypes.string,
  airports: PropTypes.array,
  onChange: PropTypes.func
};

export default AirportPicker;
