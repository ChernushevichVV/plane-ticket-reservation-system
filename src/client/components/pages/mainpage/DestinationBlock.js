import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeDepartureAirport } from "../../../action/index";
import { changeDestinationAirport } from "../../../action/index";

class ConnectedDestinationBlock extends Component {
  handleChangeDeparture = e => {
    const value = e.target.value;
    this.props.changeDepartureAirport(value);
  };

  handleChangeDestination = e => {
    const value = e.target.value;
    this.props.changeDestinationAirport(value);
  };

  render() {
    const departureAirports = [
      "Minsk",
      "Moscow",
      "Kiev",
      "Warshaw",
      "Paris",
      "Bremen"
    ];
    const destinationAirports = [
      "Moscow",
      "Kiev",
      "Berlin",
      "London",
      "Prague",
      "Helsinki"
    ];

    return (
      <div className="content destination-block">
        <div className="destination-block__input">
          <label>
            From
            <br />
            <input
              type="text"
              name="departure"
              placeholder="From"
              required
              list="departure"
              autoComplete="off"
              onChange={this.handleChangeDeparture}
            />
          </label>
          <datalist id="departure">
            {departureAirports.map(airport => (
              <option key={airport} value={airport}>
                {airport}
              </option>
            ))}
          </datalist>
        </div>

        <div className="destination-block__input">
          <label>
            To
            <br />
            <input
              type="text"
              name="destination"
              placeholder="To"
              required
              list="destination"
              autoComplete="off"
              onChange={this.handleChangeDestination}
            />
          </label>
          <datalist id="destination">
            {destinationAirports.map(airport => (
              <option key={airport} value={airport}>
                {airport}
              </option>
            ))}
          </datalist>
        </div>
      </div>
    );
  }
}

ConnectedDestinationBlock.propTypes = {
  changeDepartureAirport: PropTypes.func,
  changeDestinationAirport: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    changeDepartureAirport: airport => {
      dispatch(changeDepartureAirport(airport));
    },
    changeDestinationAirport: airport => {
      dispatch(changeDestinationAirport(airport));
    }
  };
};

const DestinationBlock = connect(
  null,
  mapDispatchToProps
)(ConnectedDestinationBlock);

export default DestinationBlock;
