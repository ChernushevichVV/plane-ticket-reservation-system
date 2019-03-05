import React, { Component } from "react";

export class OneWayReturnChoice extends Component {
  render() {
    return (
      <div className="oneway-return">
        <input id="OneWay" type="radio" name="ways" value="oneway" checked />
        <label for="OneWay">One Way</label> &emsp;
        <input id="Return" type="radio" name="ways" value="return" />
        <label for="Return">Return</label>
      </div>
    );
  }
}

export default OneWayReturnChoice;
