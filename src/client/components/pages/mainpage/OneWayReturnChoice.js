//to do:
//1) if Return unchecked "return date" field should be disabled

import React, { Component } from "react";

export class OneWayReturnChoice extends Component {
  state = {
    value: "return"
  };

  handleWaysChanged = e => {
    this.setState({
      value: e.target.value
    });
    this.props.onWaysChanged("");
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
          onChange={this.handleWaysChanged}
          checked={this.state.value === "oneway"}
        />
        <label htmlFor="OneWay">One Way</label> &emsp;
        <input
          id="Return"
          className="oneway-return__radio"
          type="radio"
          name="ways"
          value="return"
          onChange={this.handleWaysChanged}
          checked={this.state.value === "return"}
        />
        <label htmlFor="Return">Return</label>
      </div>
    );
  }
}

export default OneWayReturnChoice;
