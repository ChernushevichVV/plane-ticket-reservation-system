import { createStore, compose } from "redux";
//import rootReducer from "./reducer/rootReducer";
import { combineReducers } from "redux";
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
  seats: []
};

const store = createStore(
  combineReducers(reducers),
  preloadedState,
  compose(
    //applyMiddleware(forbiddenWordsMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
