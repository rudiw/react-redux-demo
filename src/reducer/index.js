import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { cakeReducer } from "./cakeReducers";
import { iceCreamReducer } from "./iceCreamReducers";
import { userReducer } from "./userReducers";

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  users: userReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
