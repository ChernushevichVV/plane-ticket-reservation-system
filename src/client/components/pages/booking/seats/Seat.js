import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Seat extends Component {
  state = {
    selected: false
  };

  handleClick = () => {
    this.setState(state => {
      console.log("click!" + this.state.selected);

      return { selected: !state.selected };
    });
  };

  render() {
    const style = classNames({
      seat: true,
      seat_reserved: this.props.status === "reserved",
      seat_selected: this.state.selected
    });

    return <div className={style} onClick={this.handleClick} />;
  }
}

Seat.propTypes = {
  status: PropTypes.string,
  id: PropTypes.string
};
