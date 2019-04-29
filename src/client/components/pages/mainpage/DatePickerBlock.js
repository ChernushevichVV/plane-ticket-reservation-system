//to do:
//1)

import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeDate } from "../../../action/index";

class ConnectedDatePickerBlock extends Component {
  handleChangeDeparture = date => {
    const id = "departure";
    this.props.changeDate(date, id);
  };
  handleChangeReturn = date => {
    const id = "return";
    this.props.changeDate(date, id);
  };

  render() {
    const { departureDate, returnDate, tripType } = this.props;

    return (
      <>
        <div className="date-picker">
          <label htmlFor="departure" className="date-picker__label">
            Departure date
          </label>
          <DatePicker
            id="departure"
            onChange={this.handleChangeDeparture}
            monthsShown={2}
            selected={departureDate}
            placeholderText="something"
            className="date-picker__input input"
          />
        </div>
        <div className="date-picker">
          <label htmlFor="return" className="date-picker__label">
            Return date
          </label>
          <DatePicker
            id="return"
            onChange={this.handleChangeReturn}
            monthsShown={2}
            selected={returnDate}
            disabled={tripType === "oneway"}
            className="date-picker__input input"
          />
        </div>
      </>
    );
  }
}

ConnectedDatePickerBlock.propTypes = {
  tripType: PropTypes.string,
  departureDate: PropTypes.object,
  returnDate: PropTypes.object,
  changeDate: PropTypes.func
};

const mapStateToProps = state => {
  return {
    tripType: state.tripType,
    departureDate: state.date.departure,
    returnDate: state.date.return
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeDate: (date, way) => {
      dispatch(changeDate(date, way));
    }
  };
};

const DatePickerBlock = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedDatePickerBlock);

export default DatePickerBlock;
