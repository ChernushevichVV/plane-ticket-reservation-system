import React, { Component } from "react";

export class RouteDetails extends Component {
  render() {
    return (
      <div className="route-details">
        <div className="route-details__time">{this.props.time}</div>
        <div className="route-details__type">{this.props.type}</div>
      </div>
    );
  }
}

export default RouteDetails;
