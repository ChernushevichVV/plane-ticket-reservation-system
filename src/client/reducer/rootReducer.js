import { actionTypes } from "../action/actionTypes";

const initialState = {
  flightSearchOption: "return"
};

function rootReducer(state = initialState, action) {
  if (action.type === actionTypes.FLIGHT_SEARCH_OPTION_CHANGE) {
    return {
      ...state,
      flightSearchOption: action.payload
    };
  }
  return state;
}

export default rootReducer;
