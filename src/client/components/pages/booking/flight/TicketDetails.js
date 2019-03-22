import React, { Component } from "react";

export class TicketDetails extends Component {
  render() {
    return (
      <div className="ticket-details">
        Standart Econom Business etc.
        <br />
        ticket info
        <br />
        price : {this.props.price}
        <button className="ticket-details__button" onClick={this.props.onClose}>
          {this.props.buttonLabel}
        </button>
      </div>
    );
  }
}

export default TicketDetails;
