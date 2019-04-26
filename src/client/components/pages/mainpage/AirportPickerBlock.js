import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AirportPicker from "./AirportPicker";
import { changeAirport } from "../../../action/index";

class ConnectedDestinationBlock extends Component {
  handleAirportChange = e => {
    const value = e.target.value;
    const placeholder = e.target.placeholder;
    this.props.changeAirport(value, placeholder);
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
      //<div className="airport-picker-block">
      <>
        <AirportPicker
          placeholder="From"
          airports={departureAirports}
          onChange={this.handleAirportChange}
        />
        <AirportPicker
          placeholder="To"
          airports={destinationAirports}
          onChange={this.handleAirportChange}
        />
      </>
    );
  }
}

ConnectedDestinationBlock.propTypes = {
  changeAirport: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    changeAirport: (airport, way) => {
      dispatch(changeAirport(airport, way));
    }
  };
};

const DestinationBlock = connect(
  null,
  mapDispatchToProps
)(ConnectedDestinationBlock);

export default DestinationBlock;
