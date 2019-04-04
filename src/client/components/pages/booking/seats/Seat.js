import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from "react-redux";
import { changeSeatSelection } from "../../../../action/index";

class ConnectedSeat extends Component {
  state = {
    selected: false
  };

  handleClick = () => {
    let { seats, passenger } = this.props;

    //don't handle click if all posible seats was already chosen
    if (
      seats.length === passenger.adult + passenger.child &&
      !this.state.selected
    ) {
      return;
    }

    this.setState(state => {
      return {
        selected: !state.selected
      };
    });

    !this.state.selected
      ? seats.push(this.props.id)
      : seats.splice(seats.indexOf(this.props.id), 1);
    this.props.changeSeatSelection(seats);
  };

  render() {
    const { id, status } = this.props;

    const style = classNames("seat", {
      "none-pointer": status === "reserved",
      "seat--reserved": status === "reserved",
      "seat--selected": this.state.selected
    });

    return <div className={style} onClick={this.handleClick} id={id} />;
  }
}

ConnectedSeat.propTypes = {
  status: PropTypes.string,
  id: PropTypes.string,
  seats: PropTypes.array,
  changeSeatSelection: PropTypes.func,
  passenger: PropTypes.object
};

const mapStateToProps = state => {
  return { passenger: state.passenger, seats: state.seats };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSeatSelection: seats => {
      dispatch(changeSeatSelection(seats));
    }
  };
};

const Seat = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedSeat);

export default Seat;
