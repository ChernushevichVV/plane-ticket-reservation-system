//to do:
//

import React, { Component } from "react";

export class Stepper extends Component {
  state = {
    adult: 1,
    child: 0
  };

  role = this.props.age;

  addPassenger = () => {
    this.setState((prevState, props) => ({
      [this.role]: (prevState[this.role] += 1)
    }));
  };

  deletePassenger = () => {
    this.setState((prevState, props) => ({
      [this.role]: (prevState[this.role] -= 1)
    }));
  };

  render() {
    const info = this.role === "adult" ? "(18+)" : "(0-18)";

    return (
      <div className="stepper-wrapper">
        <div className="stepper-input">
          <button
            disabled={this.state.adult <= 1 && this.state.child <= 0}
            className="stepper-input__button button"
            onClick={this.deletePassenger}
          >
            -
          </button>
          <input
            type="text"
            value={this.state[this.role]}
            className="input stepper-input__input"
          />
          <button
            disabled={this.state.adult >= 6 || this.state.child >= 6}
            className="stepper-input__button button"
            onClick={this.addPassenger}
          >
            +
          </button>
        </div>
        <p>{this.role + info}</p>
      </div>
    );
  }
}

export default Stepper;
