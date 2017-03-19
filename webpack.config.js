const path = require('path');
const webpconstack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	{
		entry: {
			client: './src/index.jsx'
		},
		output: {
			path: path.resolve(__dirname, 'dist/static'),
			filename: '[name].js'
		},
		resolve: {
			alias: {
				'app-config': path.resolve(__dirname, 'config.json'),
				'helpers': path.resolve(__dirname, 'src/helpers')
			}
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					use:[
						{ loader: 'babel-loader',
							options : {
								presets : [
									"react",
									"es2015",
									"babel-preset-stage-0"
								]
							}
						},
					]
				}, {
					test: /\.css/,
					loader: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize'"
					})
				}, {
					test: /\.(jpe?g|png|gif|svg)$/i,
					use: 'file-loader?name=assets/[name].[ext]'
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('main.css')
		]
	}, {
		entry: {
			server: './src/server.js'
		},
		target: 'node',
		node: {
			__dirname: false,
			__filename: false,
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js'
		},
		resolve: {
			alias: {
				'app-config': path.resolve(__dirname, 'config.json'),
				'helpers': path.resolve(__dirname, 'src/helpers')
			}
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					use:[
						{ loader: 'babel-loader',
							options : {
								presets : [
									"react",
									"es2015",
									"babel-preset-stage-0"
								]
							}
						},
					]
				}, {
					test: /\.css/,
					loader: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize'"
					})
				}, {
					test: /\.(jpe?g|png|gif|svg)$/i,
					use: 'file-loader?name=static/assets/[name].[ext]'
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('./static/main.css')
		]
	}
];
