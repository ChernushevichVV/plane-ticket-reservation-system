//to do:
//1)

import React, { Component } from "react";
import { connect } from "react-redux";
import { changeTripType } from "../../../action/index";
import PropTypes from "prop-types";

class ConnectedChoice extends Component {

  handleChange = e => {
    const value = e.target.value;
    this.props.changeTripType(value);
  };

  render() {
    return (
      <div className="content oneway-return">
        <input
          id="OneWay"
          className="oneway-return__radio"
          type="radio"
          name="ways"
          value="oneway"
          onChange={this.handleChange}
          checked={this.props.tripType === "oneway"}
        />
        <label htmlFor="OneWay">One Way</label> &emsp;
        <input
          id="Return"
          className="oneway-return__radio"
          type="radio"
          name="ways"
          value="return"
          onChange={this.handleChange}
          checked={this.props.tripType === "return"}
        />
        <label htmlFor="Return">Return</label>
      </div>
    );
  }
}

ConnectedChoice.propTypes = {
  tripType: PropTypes.string,
  changeTripType: PropTypes.func
};

const mapStateToProps = state => {
  return { tripType: state.tripType };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTripType: newOption => {
      dispatch(changeTripType(newOption));
    }
  };
};

const OneWayReturnChoice = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedChoice);

export default OneWayReturnChoice;
