const express = require('express');
const app = express();
const React = require('react');
const ReactDom = require('react-dom/server');
const component = require('./src/index.jsx');

app.get('/', (req, res) => {
	const html = ReactDom.renderToString(
		React.createElement(component)
	);
	res.send(html);
});

app.listen(4443);

