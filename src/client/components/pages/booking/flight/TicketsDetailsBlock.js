import React, { Component } from "react";
import TicketDetails from "./TicketDetails";

export class TicketsDetailsBlock extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="ticket-details-block-backdrop">
        <div className="ticket-details-block-modal">
          {/* number of Components == number of types */}
          <div className="ticket-details-block-header">
            <button
              className="ticket-details-block-header__button"
              onClick={this.props.onClose}
            >
              X
            </button>
          </div>

          <div className="ticket-details-block-tickets">
            <TicketDetails
              buttonLabel="Take"
              onClose={this.props.onClose}
              price="50$"
            />
            <TicketDetails
              buttonLabel="Take"
              onClose={this.props.onClose}
              price="90$"
            />
            <TicketDetails
              buttonLabel="Take"
              onClose={this.props.onClose}
              price="90$"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TicketsDetailsBlock;
