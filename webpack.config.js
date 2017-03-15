var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('index.bundle.css');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{ test: /\.jsx?$/,
				use:[
					{ loader: 'babel-loader',
						options : {
							presets : [
								"react",
								"es2015"
							]
						}
					},
				]
			}, {
				test: /\.css/,
				loader: extractCSS.extract({
					fallback: "style-loader",
					use: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize'"
				})
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			template: require('html-webpack-template'),
			title: 'App',
			head: {
				css: [ "index.bundle.css" ]
			},
			meta: [
				{
					name: 'ok',
					content: 'ok'
				}
			],
			appMountId: 'app'}),
		extractCSS
	]
};