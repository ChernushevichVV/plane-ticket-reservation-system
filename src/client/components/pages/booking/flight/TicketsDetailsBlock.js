import React, { Component } from "react";
import TicketDetails from "./TicketDetails";
import CloseButton from "../../../misc/CloseButton";
import PropTypes from "prop-types";

class TicketsDetailsBlock extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    const { onClose } = this.props;

    return (
      <div className="modal">
        <div className="ticket-details-block-modal-content animation">
          {/* number of Components == number of types */}
          <CloseButton onClick={onClose} />

          <div className="ticket-details-block-tickets">
            <TicketDetails buttonLabel="Take" onClose={onClose} price="50$" />
            <TicketDetails buttonLabel="Take" onClose={onClose} price="90$" />
            <TicketDetails buttonLabel="Take" onClose={onClose} price="90$" />
          </div>
        </div>
      </div>
    );
  }
}

export default TicketsDetailsBlock;
