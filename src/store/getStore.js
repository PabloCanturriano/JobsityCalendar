import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

const initialState = {};
const enhancers = [window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f];
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default function getStore(reducer){
  return createStore(reducer, initialState, composedEnhancers);
}
