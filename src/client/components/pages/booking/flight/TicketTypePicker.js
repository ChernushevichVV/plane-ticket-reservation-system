import React, { Component } from "react";
import TicketType from "./TicketType";

export class TicketTypePicker extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="ticket-type-picker-backdrop">
        <div className="ticket-type-picker-modal">
          {/* number of Components == number of types */}
          <TicketType
            buttonLabel="Take"
            onClose={this.props.onClose}
            price="50$"
          />
          <TicketType
            buttonLabel="Take"
            onClose={this.props.onClose}
            price="90$"
          />
        </div>
      </div>
    );
  }
}

export default TicketTypePicker;
