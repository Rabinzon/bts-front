import React from 'react';
import {Route} from 'react-router';

import App from './containers/App';
import Main from './pages/Main';
import Movie from './pages/Movie';
import About from './pages/About';
import Sponsors from './pages/Sponsors';

const routes = () => {
	return (
		<Route component={App}>
			<Route path="/" component={Main}/>
			<Route path="movie/:id" component={Movie} />
			<Route path="about" component={About} />
			<Route path="Sponsors" component={Sponsors} />
		</Route>
	)
};

export default routes;
