import React, { Component } from "react";
import TicketsContainer from "./TicketsContainer";

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
            className="ticket-picker__button inner-button button"
            onClick={this.toggleModal}
          >
            {this.props.buttonLabel} {/*Continue*/}
          </button>
        </div>
        <TicketsContainer
          show={this.state.isModalOpen}
          onClose={this.toggleModal}
        />
      </>
    );
  }
}

export default TicketPicker;
