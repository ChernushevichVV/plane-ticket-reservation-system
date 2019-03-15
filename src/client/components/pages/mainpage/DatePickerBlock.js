//to do:
//1)

import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return { flightSearchOption: state.flightSearchOption };
};
export class ConnectedDatePickerBlock extends Component {
  state = {
    startDateDepart: new Date(),
    startDateReturn: new Date()
  };

  handleDepart = date => {
    this.setState({
      startDateDepart: date
    });
  };

  handleReturn = date => {
    this.setState({
      startDateReturn: date
    });
  };

  render() {
    return (
      <div className="content date-picker">
        <div className="date-picker__input">
          <label className="date-picker__label">
            <h4>Departure date</h4>
            <DatePicker
              onChange={this.handleDepart}
              monthsShown={2}
              selected={this.state.startDateDepart}
            />
          </label>
        </div>
        <div className="date-picker__input">
          <label className="date-picker__label">
            <h4>Return date</h4>
            <DatePicker
              onChange={this.handleReturn}
              monthsShown={2}
              selected={this.state.startDateReturn}
              disabled={this.props.flightSearchOption === "oneway"}
            />
          </label>
        </div>
      </div>
    );
  }
}

ConnectedDatePickerBlock.propTypes = { flightSearchOption: PropTypes.string };

const DatePickerBlock = connect(mapStateToProps)(ConnectedDatePickerBlock);

export default DatePickerBlock;
