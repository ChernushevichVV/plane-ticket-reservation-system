import React, { Component } from "react";
import TicketsDetailsBlock from "./TicketsDetailsBlock";

export class TicketPicker extends Component {
  state = {
    isModalOpen: false
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
    return (
      <>
        <div className="ticket-picker">
          From {this.props.price}
          {this.props.currency}
          <button
            className="ticket-picker__button button"
            onClick={this.toggleModal}
          >
            {this.props.buttonLabel} {/*Continue*/}
          </button>
        </div>
        <TicketsDetailsBlock
          show={this.state.isModalOpen}
          onClose={this.toggleModal}
        />
      </>
    );
  }
}

export default TicketPicker;
