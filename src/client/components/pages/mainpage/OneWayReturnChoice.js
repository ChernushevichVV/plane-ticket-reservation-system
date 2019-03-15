//to do:
//1) if Return unchecked "return date" field should be disabled

import React, { Component } from "react";
import { connect } from "react-redux";
import { changeFlightSearchOption } from "../../../action/index";

const mapStateToProps = state => {
  return { flightSearchOption: state.flightSearchOption };
};

function mapDispatchToProps(dispatch) {
  return {
    changeFlightSearchOption: newOption => {
      dispatch(changeFlightSearchOption(newOption));
    }
  };
}

class ConnectedChoice extends Component {
  //= ({ flightSearchOption }) => (

  handleChange = e => {
    const value = e.target.value;
    this.props.changeFlightSearchOption(value);
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
          checked={this.props.flightSearchOption === "oneway"}
        />
        <label htmlFor="OneWay">One Way</label> &emsp;
        <input
          id="Return"
          className="oneway-return__radio"
          type="radio"
          name="ways"
          value="return"
          onChange={this.handleChange}
          checked={this.props.flightSearchOption === "return"}
        />
        <label htmlFor="Return">Return</label>
      </div>
    );
  }
}

const OneWayReturnChoice = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedChoice);

export default OneWayReturnChoice;
