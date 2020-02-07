import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger"
import rootReducer from "@kun-redux/reducers";
import promise from 'redux-promise';

import rootSaga from "../sagas";

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware()
  let middlewares = [];
  if( process.env.NODE_ENV !== "production") {
     middlewares = [thunkMiddleware, promise, sagaMiddleware, logger ];
  } else {
    middlewares = [thunkMiddleware, promise, sagaMiddleware ];
  }
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhaners = [middlewareEnhancer];
  const composedEnhancer = composeWithDevTools(...enhaners);
  const store = createStore(rootReducer, preloadedState, process.env.NODE_ENV !== "production" ? composedEnhancer : applyMiddleware(...middlewares));
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../reducers", () => store.replaceReducer(rootReducer));
  }
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
