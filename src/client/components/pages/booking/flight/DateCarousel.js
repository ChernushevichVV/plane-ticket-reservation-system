import React, { Component } from "react";
import ItemsCarousel from "react-items-carousel";
import DateItem from "./DateItem";

export default class DateCarousel extends Component {
  state = {
    children: [
      <DateItem key={1} />,
      <DateItem key={2} />,
      <DateItem key={3} />,
      <DateItem key={4} />,
      <DateItem key={5} />
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
