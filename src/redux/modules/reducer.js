import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';

import addReducer from './add';

const reducer = combineReducers({
	counter: addReducer
});

export default reducer;
