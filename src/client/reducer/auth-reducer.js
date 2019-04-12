import { actionTypes } from "../action/actionTypes";
import isEmpty from "./isEmpty";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      console.log("reducer");
      console.log(action);

      return {
        ...state, //do I need it???
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
