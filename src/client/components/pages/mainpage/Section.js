import React, { Component } from "react";
import FlightInputForm from "./FlightInputForm";

export class Section extends Component {
  render() {
    return (
      <div className="section">
        <FlightInputForm />
      </div>
    );
  }
}

export default Section;
