import { combineReducers } from 'redux';

import movies from './movies';
import movie from './movie';

const reducer = combineReducers({movies, movie});

export default reducer;
