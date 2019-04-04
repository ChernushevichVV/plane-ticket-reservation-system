import React, { Component } from "react";
import ItemsCarousel from "react-items-carousel";
import DateItem from "./DateItem";
import PropTypes from "prop-types";

const secondsInDay = 1000 * 60 * 60 * 24;
export default class DateCarousel extends Component {
  state = {
    children: [
      <DateItem key={1} time={this.props.date.getTime() - 2 * secondsInDay} />,
      <DateItem key={2} time={this.props.date.getTime() - 1 * secondsInDay} />,
      <DateItem key={3} time={this.props.date.getTime()} />,
      <DateItem key={4} time={this.props.date.getTime() + 1 * secondsInDay} />,
      <DateItem key={5} time={this.props.date.getTime() + 2 * secondsInDay} />
    ],
    activeItemIndex: 2
  };

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { children } = this.state;

    return (
      <div className="date-carousel">
        <ItemsCarousel
          //className="item-carousel"
          // Placeholder configurations
          enablePlaceholder
          numberOfPlaceholderItems={1}
          minimumPlaceholderTime={500}
          numberOfCards={3}
          gutter={10}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={false}
          placeholderItem={<div className="date-carousel__placeholder" />}
          // Active item configurations
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={this.state.activeItemIndex}
          activePosition={"center"}
          chevronWidth={30}
          rightChevron={">"}
          leftChevron={"<"}
          outsideChevron={true}
        >
          {children}
        </ItemsCarousel>
      </div>
    );
  }
}

DateCarousel.propTypes = {
  date: PropTypes.object
};
