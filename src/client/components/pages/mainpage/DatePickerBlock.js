import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class DatePickerBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>
        <DatePicker
          className="date-picker"
          placeholderText="Departure date"
          selected={this.state.startDate}
          onChange={this.handleChange}
          monthsShown={2}
          showMonthDropdown
        />
        <DatePicker
          className="date-picker"
          placeholderText="Return date"
          selected={this.state.startDate}
          onChange={this.handleChange}
          monthsShown={2}
          showMonthDropdown
        />
      </div>
    );
  }
}

export default DatePickerBlock;
