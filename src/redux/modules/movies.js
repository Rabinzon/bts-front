import axios from 'axios';
import { createAction, createReducer } from 'redux-act';

const initState = {
	fetching: false,
	error: null,
	fetched: false,
	data: null,
	movies: null,
};
const API = 'http://bts.tatar:1323';

const get = () => axios.get(API);

export const fetch = createAction('MOVIES', get);

export const search = createAction('MOVIES_FILTER');

export const PENDING = createAction('MOVIES_PENDING');
export const FULFILLED = createAction('MOVIES_FULFILLED');
export const REJECTED = createAction('MOVIES_REJECTED');

const pending = (state, payload) =>
	({...state, fetching: true, data: null});

const success = (state, payload) =>
	({...state, fetching: false, fetched: true, data: payload.data, movies: payload.data});

const error = () => (state, payload) =>
	({...state, fetching: false, fetched: false, error: payload});

const filter = (state, payload) =>
	({...state, movies: state.data.filter(item => new RegExp(payload, 'gi').test(item.Title))});

const addReducer = createReducer( on => {
	on(PENDING, pending);
	on(FULFILLED, success);
	on(REJECTED, error);
	on(search, filter);
}, initState);

export default addReducer;
