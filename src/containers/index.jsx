import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
i

import store from './redux/create';

export default ReactDOM.render(
	<Provider store={store}>
		
	</Provider>,
	document.getElementById('app') // eslint-disable-line no-undef
);
