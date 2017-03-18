const path = require('path');
const webpconstack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('index.bundle.css');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
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
				loader: extractCSS.extract({
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
