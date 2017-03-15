import { createAction, createReducer } from 'redux-act';

export const add = createAction('add some stuff');

const addReducer = createReducer({
	[add]: (state) => state + 1,
}, 0);

export default addReducer;