import React, { Component } from "react";
import FlightInfoForm from "./FlightInfoForm";

export class Section extends Component {
  render() {
    return (
      <div className="section">
        <FlightInfoForm />
      </div>
    );
  }
}

export default Section;
