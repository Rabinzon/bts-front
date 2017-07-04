const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { plugins, stats } = require('./common.config');

const env = process.env;
const production = env.NODE_ENV === 'production';

const rootPath =  path.resolve(__dirname, '../');
const distPath =  path.resolve(rootPath, 'dist');
const srcPath =  path.resolve(rootPath, 'src');

const configPath = path.resolve(rootPath, 'config.json');
const helpersPath = path.resolve(srcPath, 'helpers');
const entryPath = path.resolve(srcPath, 'server.js');

module.exports = {
	entry: {
		server: entryPath
	},
	target: 'node',
	stats,
	node: {
		__dirname: false,
		__filename: false,
	},
	output: {
		path: distPath,
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
				exclude: /(node_modules|bower_components)/,
				use:[{loader: 'happypack/loader'}]
			}, {
				test: /\.css/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize'"
				})
			}, {
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: 'file-loader?name=[name].[ext]&publicPath=static/assets/&outputPath=static/assets/'
			}
		]
	},
	plugins: [
		...plugins,
		new CleanWebpackPlugin([distPath+'/'], {root: rootPath}),
		new ExtractTextPlugin('./static/main.css'),
		new CopyWebpackPlugin([{
			from: './src/static/assets/favicon',
			to: 'static/assets/'
		}])
	]
};
