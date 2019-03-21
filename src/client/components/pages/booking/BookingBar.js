import React, { Component } from "react";

export class BookingBar extends Component {
  render() {
    return (
      <div className="booking-bar border">
        <ul className="booking-bar__list">
          <li className="booking-bar__list-item ">Flight selection</li>
          <li className="booking-bar__list-item">Seat selection</li>
          <li className="booking-bar__list-item">Luggage</li>
          <li className="booking-bar__list-item">Personal data</li>
          <li className="booking-bar__list-item">Payment</li>
          <li className="booking-bar__list-item">Confirmation</li>
        </ul>
      </div>
    );
  }
}

export default BookingBar;