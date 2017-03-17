import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from './modules/reducer';

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

export default store;
