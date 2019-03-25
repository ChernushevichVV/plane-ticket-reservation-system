import { actionTypes } from "../action/actionTypes";

const airportChange = (state = {}, action) => {
  if (action.type === actionTypes.DEPARTURE_AIRPORT_CHANGE) {
    return {
      ...state,
      outboundAirport: action.payload
    };
  }
  if (action.type === actionTypes.DESTINATION_AIRPORT_CHANGE) {
    return {
      ...state,
      inboundAirport: action.payload
    };
  }
  return state;
};

export default airportChange;
