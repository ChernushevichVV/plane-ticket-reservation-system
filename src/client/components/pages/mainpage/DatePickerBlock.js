//to do:
//1) add style for disabled input

import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class DatePickerBlock extends Component {
  state = {
    startDate1: "",
    startDate2: "",
    disableReturn: false
  };

  //solve the case with dates later
  handleDepart = date => {
    this.setState({
      startDate1:
        +this.state.startDate2 <= +this.state.startDate1
          ? date
          : this.state.startDate2
    });
  };

  handleReturn = date => {
    this.setState({
      startDate2:
        +this.state.startDate1 <= +this.state.startDate2
          ? date
          : this.state.startDate1
    });
  };

  handleSelect(date) {
    alert(date);
  }

  render() {
    return (
      <div className="content date-picker">
        <div className="date-picker__input">
          <DatePicker
            onChange={this.handleDepart}
            onSelect={this.handleSelect}
            monthsShown={2}
            selected={this.state.startDate1}
            placeholderText="Departure date"
          />
        </div>
        <div className="date-picker__input">
          <DatePicker
            onChange={this.handleReturn}
            onSelect={this.handleSelect}
            monthsShown={2}
            selected={this.state.startDate2}
            placeholderText="Return date"
            disabled={this.state.disableReturn}
          />
        </div>
      </div>
    );
  }
}

export default DatePickerBlock;
