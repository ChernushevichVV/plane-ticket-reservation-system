import React, { Component } from "react";
import FlightDetails from "./FlightDetails";
import RouteDetails from "./RouteDetails";
import TicketPicker from "./TicketPicker";

export class FlightDetailsBlock extends Component {
  render() {
    return (
      <div className="flight-details-block">
        <FlightDetails time="10:00" airport={this.props.from} />
        <RouteDetails time="1h" type="direct" />
        <FlightDetails time="11:00" airport={this.props.to} />
        <TicketPicker price="50" currency="$" buttonLabel="Continue" />
      </div>
    );
  }
}

export default FlightDetailsBlock;
