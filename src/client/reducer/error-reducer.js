import { actionTypes } from "../action/actionTypes";

const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ERRORS:
      return action.payload;

    case actionTypes.RESET_ERRORS:
      return {};
    default:
      return state;
  }
};

export default errorReducer;
