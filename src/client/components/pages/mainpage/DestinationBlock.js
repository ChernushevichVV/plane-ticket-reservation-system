import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export class DestinationBlock extends Component {
  render() {
    return (
      <div className="content destination-block">
        <div className="destination-block__input">
          <label>
            From
            <br />
            <input
              type="text"
              name="destination"
              placeholder="From"
              required
              list="destinations"
            />
          </label>
          <datalist id="destinations">
            <option value="Airport" />
          </datalist>
        </div>

        <div className="destination-block__input">
          <label>
            To
            <br />
            <input
              type="text"
              name="destination"
              placeholder="To"
              required
              list="destinations"
            />
          </label>
          <datalist id="destinations">
            <option value="Airport" />
          </datalist>
        </div>
      </div>
    );
  }
}

export default DestinationBlock;
