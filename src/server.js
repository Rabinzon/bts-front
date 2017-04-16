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
        <title></title>
          **<base href="/" />**
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
