import { actionTypes } from "../action/actionTypes";

const departureChange = (state = {}, action) => {
  if (action.type === actionTypes.DEPARTURE_AIRPORT_CHANGE) {
    return action.payload;
  }
  return state;
};

export default departureChange;
