import React from "react";
import Legend from "./Legend";
import Plane from "./Plane";
import NextButton from "../../../misc/NextButton";

const SeatSelection = () => {
  return (
    <div className="seat-selection">
      <Legend />
      <Plane />
      <NextButton link="/booking/luggage" />
    </div>
  );
};

export default SeatSelection;
