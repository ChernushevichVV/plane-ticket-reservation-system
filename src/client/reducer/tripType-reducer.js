import { actionTypes } from "../action/actionTypes";

const tripType = (state = {}, action) => {
  if (action.type === actionTypes.TRIP_TYPE_OPTION_CHANGE) {
    return action.payload;
  }
  return state;
};

export default tripType;
