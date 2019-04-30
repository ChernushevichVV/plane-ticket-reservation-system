import React, { Component } from "react";

export class TicketDetails extends Component {
  render() {
    return (
      <div className="ticket">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi
          elit, ullamcorper nec porta sed, pellentesque et felis. Etiam finibus
          posuere turpis, vitae imperdiet nibh aliquet ac. Nullam malesuada
          fringilla libero quis aliquam.
        </p>
        price : {this.props.price}
        <button className="button ticket__button" onClick={this.props.onClose}>
          {this.props.buttonLabel}
        </button>
      </div>
    );
  }
}

export default TicketDetails;
