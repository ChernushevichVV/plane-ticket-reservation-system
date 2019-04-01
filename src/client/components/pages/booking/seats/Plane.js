import React, { Component } from "react";
import PropTypes from "prop-types";
import Seat from "./Seat";

class Plane extends Component {
  //sections = [["nubmerOfRows", "numberOfSeatsInRow"], ["..."]];

  renderPlane = sections => {
    let arr = [];
    for (let i = 0; i < sections.length; i++) {
      arr[i] = (
        <>
          {i !== 0 && <div className="plane__empty-section" />}
          <div className="plane__section">{this.renderRows(sections[i])}</div>
        </>
      );
    }
    return arr;
  };

  renderRows = rowSeat => {
    let arr = [];
    for (let i = 0; i < rowSeat[0]; i++) {
      arr[i] = <div className="plane__row">{this.renderSeats(rowSeat[1])}</div>;
    }
    return arr;
  };

  renderSeats = seat => {
    let arr = [];
    for (let j = 0; j < seat; j++) {
      arr[j] = <Seat key={j} />;
    }
    return arr;
  };

  render() {
    return (
      <div className="plane-container">
        <div className="plane">
          {this.renderPlane([[10, 3], [12, 4], [10, 3]])}
        </div>
      </div>
    );
  }
}

Plane.propTypes = {};

export default Plane;
