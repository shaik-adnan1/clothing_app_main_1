import {compose, createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// curry Functions

// const currFun = (a) => (b, c) => {
//     return a + b - c; 
// }

// const withA = currFun(5)
// withA(6, 1)

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  // console.log("type", action.type);
  // console.log("payload", action.payload);
  // console.log("Current State", store.getState());

  next(action);

  // console.log("Next State", store.getState());

}

// root reducer

const middleWares = [loggerMiddleware]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)