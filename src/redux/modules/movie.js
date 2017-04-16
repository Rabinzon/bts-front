import axios from 'axios';
import CONFIG from 'app-config';
import { createAction, createReducer } from 'redux-act';

const initState = {
	fetching: false,
	error: null,
	fetched: false,
	movie: null,
};


const getOne = (id) => console.log(id) || axios.get(`${CONFIG.api}/movie/${id}`);

export const fetchOne = createAction('MOVIE', getOne);

export const MOVIE_PENDING = createAction('MOVIE_PENDING');
export const MOVIE_FULFILLED = createAction('MOVIE_FULFILLED');
export const MOVIE_REJECTED = createAction('MOVIE_REJECTED');

const pending = (state, payload) =>
	({...state, fetching: true, movie: null});

const success = (state, payload) =>
	({...state, fetching: false, fetched: true, movie: payload.data});

const error = () => (state, payload) =>
	({...state, fetching: false, fetched: false, error: payload});

const addReducer = createReducer(on => {
	on(MOVIE_PENDING, pending);
	on(MOVIE_FULFILLED, success);
	on(MOVIE_REJECTED, error);
}, initState);

export default addReducer;
