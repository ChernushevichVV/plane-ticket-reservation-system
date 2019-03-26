import { createStore, compose } from "redux";
//import rootReducer from "./reducer/rootReducer";
import { combineReducers } from "redux";
import * as reducers from "./reducer/index";

const initialState = {
  tripType: "return",
  returnDate: new Date(),
  departureDate: new Date(),
  airport: {
    departure: "",
    destination: ""
  }
};

const store = createStore(
  combineReducers(reducers),
  initialState,
  compose(
    //applyMiddleware(forbiddenWordsMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
