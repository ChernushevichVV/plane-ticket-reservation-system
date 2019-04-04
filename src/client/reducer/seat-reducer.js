import { actionTypes } from "../action/actionTypes";

const seatsReducer = (state = [], action) => {
  if (action.type === actionTypes.CHANGE_SEAT_SELECTION) {
    return action.payload;
  }
  return state;
};

export default seatsReducer;
