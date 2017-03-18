import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import store from './redux/create';
import App from './containers/App';
import Main from './containers/Main';
import Movie from './containers/Movie';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Main}/>
				<Route path="movie/:id" component={Movie} />
			</Route>
		</Router>
		
	</Provider>,
	document.getElementById('app') // eslint-disable-line no-undef
);
