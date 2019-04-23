import React, { Component } from "react";
//import PropTypes from 'prop-types'
import Luggage from "./Luggage";

export default class LuggageContainer extends Component {
  render() {
    return (
      <div className="luggage-container">
        <Luggage />
        <Luggage />
      </div>
    );
  }
}
