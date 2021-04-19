import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import { cakeReducer } from "./cakeReducers";
import { iceCreamReducer } from "./iceCreamReducers";

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
