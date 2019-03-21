import React, { Component } from "react";

export class TicketType extends Component {
  render() {
    return (
      <div className="ticket-type">
        Standart Econom Business etc.
        <br />
        ticket info
        <br />
        price : {this.props.price}
        <button className="ticket-type__button" onClick={this.props.onClose}>
          {this.props.buttonLabel}
        </button>
      </div>
    );
  }
}

export default TicketType;
