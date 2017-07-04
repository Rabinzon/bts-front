import React from 'react';
import Express from 'express';
import { match, RouterContext } from 'react-router';
import routes from './routes.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/modules/reducer';
import { renderToString } from 'react-dom/server';
import getHtml from 'helpers/getHtml';

import CONF  from 'app-config';
const app = Express();

app.use('/static', Express.static(__dirname + '/static'));

const handleRender = (req, res) => {
	const store = createStore(reducer);
	match({ routes: routes(), location: req.url }, (err, redirect, props) => {
		const html = renderToString(
			<Provider store={store}>
				<RouterContext {...props}/>
			</Provider>
		);
		const preloadedState = store.getState();
		res.send(getHtml(html, preloadedState));
	});
};

app.use(handleRender);

app.listen(env.PORT, (err) => {
	if (err) {
		console.error(err);
	}
	console.info('==> 💻  Open http://%s:%s in a browser to view the app.', 'localhost', env.PORT);
});
