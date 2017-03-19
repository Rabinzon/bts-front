import path from 'path'
import Express from 'express'
import React from 'react'
import { match, RouterContext } from 'react-router'
import routes from './routes.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/modules/reducer'
import { renderToString } from 'react-dom/server'
const app = Express();

app.use(Express.static(__dirname + '/static'));

const renderFullPage = html => {
	return `
    <!DOCTYPE html>
    <html>
      <head>
        <title></title>
          **<base href="/" />**
         <link href="main.css" rel="stylesheet" type="text/css" charSet="UTF-8">
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="client.js"></script>
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

app.listen(4443);
