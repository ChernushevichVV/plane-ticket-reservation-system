import React, { Component } from "react";
import FlightDetailsBlock from "./FlightDetailsBlock";
//import DateCarousel from "./DateCarousel";
import PropTypes from "prop-types";

export class FlightsList extends Component {
  render() {
    const { /*date,*/ departure, destination } = this.props;

    return (
      <div className="flights-list">
        {/* reserved for future released */}
        {/* <DateCarousel date={date} /> */}
        {/* the nubmer of these componenets == nubmer of flights */}
        <FlightDetailsBlock from={departure} to={destination} />
        <FlightDetailsBlock from={departure} to={destination} />
      </div>
    );
  }
}

FlightsList.propTypes = {
  date: PropTypes.object,
  departure: PropTypes.string,
  destination: PropTypes.string
};

export default FlightsList;
