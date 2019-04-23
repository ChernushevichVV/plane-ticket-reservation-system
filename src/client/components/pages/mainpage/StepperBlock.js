import React, { Component } from "react";
import Stepper from "./Stepper";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPassenger } from "../../../action/index";
import { deletePassenger } from "../../../action/index";

class ConnectedStepperBlock extends Component {
  handleDecrement = e => {
    const type = e.target.name;
    this.props.deletePassenger(type);
  };

  handleIncrement = e => {
    const type = e.target.name;
    this.props.addPassenger(type);
  };

  render() {
    return (
      <div className="content">
        <Stepper
          label="Adult(18+)"
          name="adult"
          minValue={1}
          maxValue={6}
          num={this.props.passenger.adult}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <Stepper
          label="Child(0-18)"
          name="child"
          minValue={0}
          maxValue={6}
          num={this.props.passenger.child}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

ConnectedStepperBlock.propTypes = {
  passenger: PropTypes.object,
  addPassenger: PropTypes.func,
  deletePassenger: PropTypes.func
};

const mapStateToProps = state => {
  return { passenger: state.passenger };
};

const mapDispatchToProps = dispatch => {
  return {
    addPassenger: type => {
      dispatch(addPassenger(type));
    },
    deletePassenger: type => {
      dispatch(deletePassenger(type));
    }
  };
};

const StepperBlock = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedStepperBlock);

export default StepperBlock;
