import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class DatePickerBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate1: "",
      startDate2: ""
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  //solve the case with dates later
  handleChange1(date) {
    this.setState({
      startDate1:
        +this.state.startDate2 <= +this.state.startDate1
          ? date
          : this.state.startDate2
    });
  }

  handleChange2(date) {
    this.setState({
      startDate2:
        +this.state.startDate1 <= +this.state.startDate2
          ? date
          : this.state.startDate1
    });
  }

  handleSelect(date) {
    alert(date);
  }

  render() {
    return (
      <div className="date-picker-block">
        <DatePicker
          className="date-picker"
          onChange={this.handleChange1}
          onSelect={this.handleSelect}
          monthsShown={2}
          selected={this.state.startDate1}
          placeholderText="Departure date"
        />
        <DatePicker
          className="date-picker"
          onChange={this.handleChange2}
          onSelect={this.handleSelect}
          monthsShown={2}
          selected={this.state.startDate2}
          placeholderText="Return date"
        />
      </div>
    );
  }
}

export default DatePickerBlock;
