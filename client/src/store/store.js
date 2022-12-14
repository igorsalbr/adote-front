import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import memberReducer from "./reducers";

const reducers = {
   member:memberReducer,
};

export const history = createBrowserHistory();

const reducer = combineReducers({
  ...reducers,
});

export default createStore(reducer, applyMiddleware(apiMiddleware));
