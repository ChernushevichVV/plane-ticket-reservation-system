import { actionTypes } from "../action/actionTypes";

const initialState = {
  tripType: "return",
  returnDate: new Date(),
  departureDate: new Date(),
  outboundAirport: "",
  inboundAirport: ""
};

function rootReducer(state = initialState, action) {
  if (action.type === actionTypes.TRIP_TYPE_OPTION_CHANGE) {
    return {
      ...state,
      tripType: action.payload
    };
  }
  return state;
}

export default rootReducer;
