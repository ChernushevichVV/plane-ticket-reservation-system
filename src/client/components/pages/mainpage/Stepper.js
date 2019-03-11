//to do:
//1) add style for disabled button

import React, { Component } from "react";

export class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adult: 1,
      child: 0
    };
    this.addPassenger = this.addPassenger.bind(this);
    this.deletePassenger = this.deletePassenger.bind(this);
  }

  addPassenger(role) {
    this.setState((prevState, props) => ({
      [role]: (prevState[role] += 1)
    }));
  }
  deletePassenger(role) {
    this.setState((prevState, props) => ({
      [role]: (prevState[role] -= 1)
    }));
  }

  render() {
    const info = this.props.age === "adult" ? "(18+)" : "(0-18)";

    return (
      <div className="stepperWrapper">
        <div className="stepperInput">
          <button
            disabled={
              this.props.age === "adult"
                ? this.state.adult <= 1
                : this.state.child <= 0
            }
            className="button"
            onClick={this.deletePassenger.bind(this, this.props.age)}
          >
            -
          </button>
          <input
            type="text"
            placeholder="Age"
            value={
              this.props.age === "adult" ? this.state.adult : this.state.child
            }
            className="input stepperInput__input"
          />
          <button
            disabled={
              this.props.age === "adult"
                ? this.state.adult >= 6
                : this.state.child >= 6
            }
            className="button"
            onClick={this.addPassenger.bind(this, this.props.age)}
          >
            +
          </button>
        </div>
        <p className="role">{this.props.age + info}</p>
      </div>
    );
  }
}

export default Stepper;
