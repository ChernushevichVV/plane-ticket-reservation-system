import React, { Component } from "react";

export class OneWayReturnChoice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      returnRadio: false
    };
    this.isReturnChecked = this.isReturnChecked.bind(this);
  }

  //works in wrong way
  isReturnChecked() {
    this.setState((prevState, props) => ({
      returnRadio: !prevState.returnRadio
    }));
    //alert(this.state.returnRadio);
  }

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
          onChange={this.isReturnChecked}
        />
        <label htmlFor="Return">Return</label>
      </div>
    );
  }
}

export default OneWayReturnChoice;
