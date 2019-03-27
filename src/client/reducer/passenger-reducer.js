import { actionTypes } from "../action/actionTypes";

const passengerChange = (state = {}, action) => {
  if (action.type === actionTypes.ADD_PASSENGER) {
    return { ...state, [action.payload]: state[action.payload] + 1 };
  }
  if (action.type === actionTypes.DELETE_PASSENGER) {
    return { ...state, [action.payload]: state[action.payload] - 1 };
  }
  return state;
};

export default passengerChange;
