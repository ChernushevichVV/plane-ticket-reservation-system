import React, { Component } from "react";
import Order from "./Order";

export default class OrderContainer extends Component {
  render() {
    return (
      <div className="order-container">
        Your orders:
        <Order />
        <Order />
      </div>
    );
  }
}
