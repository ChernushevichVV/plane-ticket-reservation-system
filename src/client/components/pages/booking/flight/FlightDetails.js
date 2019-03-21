import React, { Component } from "react";

export class FlightDetails extends Component {
  render() {
    return (
      <div className="flight-details">
        <div className="flight-details__time">{this.props.time}</div>
        <div className="flight-details__airport">{this.props.airport}</div>
      </div>
    );
  }
}

export default FlightDetails;
