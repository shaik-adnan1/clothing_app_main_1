import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// Every store for it to work, needs reducers!

// ROOT-REDUCER => combination of all reducers

const middleWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers)
