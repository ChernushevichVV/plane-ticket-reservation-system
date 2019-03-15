//to do:
//

import React, { Component } from "react";

export class Stepper extends Component {
  state = {
    value: this.props.minValue
  };

  increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };

  render() {
    const { minValue, label } = this.props;
    const { value } = this.state;

    return (
      <div className="stepper-wrapper">
        <div className="stepper-input">
          <button
            disabled={value <= minValue}
            className="stepper-input__button button"
            onClick={this.decrement}
          >
            -
          </button>
          <input
            type="text"
            value={value}
            className="input stepper-input__input"
          />
          <button
            disabled={value >= 6}
            className="stepper-input__button button"
            onClick={this.increment}
          >
            +
          </button>
        </div>
        <p>{label}</p>
      </div>
    );
  }
}

export default Stepper;
