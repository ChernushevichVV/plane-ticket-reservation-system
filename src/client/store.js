import { createStore, compose, applyMiddleware } from "redux";
//import rootReducer from "./reducer/rootReducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./reducer/index";

const preloadedState = {
  tripType: "return",
  date: {
    departure: new Date(),
    return: new Date()
  },
  airport: {
    departure: "",
    destination: ""
  },
  passenger: {
    adult: 1,
    child: 0
  },
  seats: [],
  errors: {},
  auth: {
    isAuthenticated: false,
    user: {}
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers(reducers),
  preloadedState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
