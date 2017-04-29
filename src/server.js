import path from 'path'
import React from 'react'
import Express from 'express'
import { match, RouterContext } from 'react-router'
import routes from './routes.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/modules/reducer'
import { renderToString } from 'react-dom/server'
import CONF  from 'app-config';
const app = Express();

app.use('/static', Express.static(__dirname + '/static'));

const renderFullPage = html => {
	return `
	    <!DOCTYPE html>
	    <html>
	        <head>
		        <meta name="viewport" content="width=device-width">
	            <title>Безнең тәҗрибә</title>
	            <base href="/" />
	            <link rel="apple-touch-icon" sizes="180x180" href="/static/assets/apple-touch-icon.png">
				<link rel="icon" type="image/png" sizes="32x32" href="/static/assets/favicon-32x32.png">
				<link rel="icon" type="image/png" sizes="16x16" href="/static/assets/favicon-16x16.png">
				<link rel="manifest" href="/static/assets/manifest.json">
				<link rel="mask-icon" href="/static/assets/safari-pinned-tab.svg" color="#5bbad5">
				<link rel="shortcut icon" href="/static/assets/favicon.ico">
				<meta name="msapplication-config" content="/static/assets/browserconfig.xml">
				<meta name="theme-color" content="#ffffff">
		        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
		        <link href="static/main.css" rel="stylesheet" type="text/css" charSet="UTF-8">
	        </head>
	        <body>
		        <div id="app">${html}</div>
		        <script src="static/client.js"></script>
	        </body>
	    </html>
    `
};

const handleRender = (req, res) => {
	const store = createStore(reducer);
	match({ routes: routes(), location: req.url }, (err, redirect, props) => {
		const html = renderToString(
			<Provider store={store}>
				<RouterContext {...props}/>
			</Provider>
		);
		const preloadedState = store.getState();
		res.send(renderFullPage(html, preloadedState))
	});
};

app.use(handleRender);
app.listen(CONF.port);
