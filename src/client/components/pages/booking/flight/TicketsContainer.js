import React, { Component } from "react";
import Ticket from "./Ticket";
import CloseButton from "../../../misc/CloseButton";
import PropTypes from "prop-types";

class TicketsContainer extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    const { onClose } = this.props;

    return (
      <div className="modal">
        <div className="tickets-container animation">
          {/* number of Components == number of types */}
          <CloseButton onClick={onClose} />

          <div className="tickets">
            <Ticket buttonLabel="Take" onClose={onClose} price="50$" />
            <Ticket buttonLabel="Take" onClose={onClose} price="90$" />
            <Ticket buttonLabel="Take" onClose={onClose} price="90$" />
          </div>
        </div>
      </div>
    );
  }
}

export default TicketsContainer;
