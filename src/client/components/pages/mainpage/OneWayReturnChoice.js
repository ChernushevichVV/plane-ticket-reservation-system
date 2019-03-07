import React, { Component } from "react";

export class OneWayReturnChoice extends Component {
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
        <label for="OneWay">One Way</label> &emsp;
        <input
          id="Return"
          className="oneway-return__input"
          type="radio"
          name="ways"
          value="return"
        />
        <label for="Return">Return</label>
      </div>
    );
  }
}

export default OneWayReturnChoice;
