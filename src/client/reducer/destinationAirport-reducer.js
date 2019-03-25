import { actionTypes } from "../action/actionTypes";

const destinationChange = (state = {}, action) => {
  if (action.type === actionTypes.DESTINATION_AIRPORT_CHANGE) {
    return action.payload;
  }
  return state;
};

export default destinationChange;
