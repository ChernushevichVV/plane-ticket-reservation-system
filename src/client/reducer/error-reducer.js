import { actionTypes } from "../action/actionTypes";

const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;
