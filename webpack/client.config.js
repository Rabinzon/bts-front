const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const rootPath =  path.resolve(__dirname, '../');
const distPath =  path.resolve(rootPath, 'dist');
const staticPath =  path.resolve(distPath, 'static');
const configPath = path.resolve(rootPath, 'config.json');
const helpersPath = path.resolve(rootPath, 'src/helpers');

module.exports = {
		entry: {
			client: './src/index.jsx'
		},
		output: {
			path: staticPath,
			filename: '[name].js'
		},
		resolve: {
			alias: {
				'app-config': configPath,
				'helpers': helpersPath
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
					use: 'file-loader?name=[name].[ext]&publicPath=static/assets/&outputPath=assets/'
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('main.css'),
			new CopyWebpackPlugin([{ from: './src/static/assets/favicon', to: 'assets/'}])
		]
	};
