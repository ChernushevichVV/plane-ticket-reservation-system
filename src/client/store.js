import { createStore, compose } from "redux";
import rootReducer from "./reducer/rootReducer";

const store = createStore(
  rootReducer,
  compose(
    //applyMiddleware(forbiddenWordsMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
