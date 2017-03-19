import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import store from './redux/create';
import App from './containers/App';
import Main from './pages/Main';
import Movie from './pages/Movie';
import About from './pages/About';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route component={App}>
				<Route path="/" component={Main}/>
				<Route path="movie/:id" component={Movie} />
				<Route path="about" component={About} />
			</Route>
		</Router>
		
	</Provider>,
	document.getElementById('app') // eslint-disable-line no-undef
);
