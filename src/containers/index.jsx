import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/create';
import App from './containers/App';

export default ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app') // eslint-disable-line no-undef
);
 