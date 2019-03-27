import { actionTypes } from "../action/actionTypes";

const dateChange = (state = {}, action) => {
  if (action.type === actionTypes.DEPARTURE_DATE_CHANGE) {
    return { ...state, departure: action.payload };
  }
  if (action.type === actionTypes.RETURN_DATE_CHANGE) {
    return { ...state, return: action.payload };
  }
  return state;
};

export default dateChange;
