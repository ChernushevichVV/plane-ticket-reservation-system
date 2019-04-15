import axios from "axios";
import { actionTypes } from "./actionTypes";
import setAuthToken from "../setAuthToken";
import jwt_decode from "jwt-decode";

export const loginUser = (user,history) => dispatch => {
  axios
    .post("/api/users/login", user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      console.log("decoded");

      console.log(decoded);

      dispatch(setCurrentUser(decoded));
      history.push("/user");
    })
    .catch(err => {
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const setCurrentUser = decoded => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push("/");
};
