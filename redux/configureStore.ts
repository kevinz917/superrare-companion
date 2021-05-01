import { createStore, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/rootReducer";

let composeEnhancers = compose;

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default configureStore;
