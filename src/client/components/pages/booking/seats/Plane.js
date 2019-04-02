import React, { Component } from "react";
import PropTypes from "prop-types";
import Seat from "./Seat";

class Plane extends Component {
  plane = {
    sections: [[15, 3], [16, 4], [15, 3]],
    reserved: ["1-5-2", "0-1-1", "0-1-2", "2-10-0"],
    business: ["1-5-2"]
  };

  renderPlane = sections => {
    let arr = [];
    for (let i = 0; i < sections.length; i++) {
      arr[i] = (
        <>
          {i !== 0 && <div className="plane__empty-section" />}
          <div className="plane__section">
            {this.renderRows(sections[i], i)}
          </div>
        </>
      );
    }
    return arr;
  };

  renderRows = (rowSeat, sectionId) => {
    let arr = [];
    for (let i = 0; i < rowSeat[0]; i++) {
      arr[i] = (
        <div className="plane__row">
          {this.renderSeats(rowSeat[1], i, sectionId)}
        </div>
      );
    }
    return arr;
  };

  renderSeats = (seat, rowId, sectionId) => {
    let arr = [];
    for (let j = 0; j < seat; j++) {
      let id = `${sectionId}-${rowId}-${j}`;
      let status = "available";
      let type = "econom";

      if (this.plane.reserved.indexOf(id) !== -1) {
        status = "reserved";
      }

      arr[j] = <Seat key={id} id={id} status={status} type={type} />;
    }
    return arr;
  };

  render() {
    return (
      <div className="plane-container">
        <div className="plane">{this.renderPlane(this.plane.sections)}</div>
      </div>
    );
  }
}

Plane.propTypes = {};

export default Plane;
