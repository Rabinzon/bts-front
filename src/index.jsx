import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory} from 'react-router';

import store from './redux/create';
import routes from './routes.jsx';

ReactDOM.render(
	<Provider store={store}>
		<Router routes={routes()} history={browserHistory} />
	</Provider>,
	document.getElementById('app')
);

