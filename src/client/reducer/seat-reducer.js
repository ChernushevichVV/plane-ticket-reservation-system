import { actionTypes } from "../action/actionTypes";

const seatSelectionChange = (state = {}, action) => {
  if (action.type === actionTypes.CHANGE_SEAT_SELECTION) {
    return action.payload;
  }
  return state;
};

export default seatSelectionChange;
