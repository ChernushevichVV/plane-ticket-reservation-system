import { actionTypes } from "../action/actionTypes";

const airportChange = (state = {}, action) => {
  if (action.type === actionTypes.DEPARTURE_AIRPORT_CHANGE) {
    return { airport: { ...state.airport, departure: action.payload } };
  }
  if (action.type === actionTypes.DESTINATION_AIRPORT_CHANGE) {
    return { airport: { ...state.airport, destination: action.payload } };
  }
  return state;
};

export default airportChange;
