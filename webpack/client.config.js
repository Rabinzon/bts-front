const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const { plugins, stats } = require('./common.config');

const env = process.env;
const production = env.NODE_ENV === 'production';

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
			filename: '[name].js',
		},
		stats,
		resolve: {
			alias: {
				'app-config': configPath,
				'helpers': helpersPath
			}
		},
		devtool: production ? 'nosources-source-map' : 'cheap-eval-source-map',
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules|bower_components)/,
					use:[{
						loader: 'babel-loader',
						options : {
							presets : [
								"react",
								"es2015",
								"babel-preset-stage-0"
							]
						}
					}]
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
			...plugins,
			new ExtractTextPlugin('main.css'),
			new CleanWebpackPlugin([distPath+'/'], {root: rootPath}),
			new CopyWebpackPlugin([{ from: './src/static/assets/favicon', to: 'assets/'}])
		]
	};
