//to do:
//1) if Return unchecked "return date" field should be disabled

import React, { Component } from "react";

export class OneWayReturnChoice extends Component {
  state = {
    returnRadio: false
  };
  //works in wrong way
  handleReturnChecked = () => {
    this.setState((prevState, props) => ({
      returnRadio: !prevState.returnRadio
    }));
  };

  render() {
    return (
      <div className="content oneway-return">
        <input
          id="OneWay"
          className="oneway-return__input"
          type="radio"
          name="ways"
          value="oneway"
          checked
        />
        <label htmlFor="OneWay">One Way</label> &emsp;
        <input
          id="Return"
          className="oneway-return__input"
          type="radio"
          name="ways"
          value="return"
          onChange={this.handleReturnChecked}
        />
        <label htmlFor="Return">Return</label>
      </div>
    );
  }
}

export default OneWayReturnChoice;
