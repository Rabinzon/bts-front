const webpack = require('webpack');

const env = process.env;
const production = env.NODE_ENV === 'production';

const envs = {
	env: env
};

const stats = {
	colors: false,
	hash: false,
	version: false,
	timings: true,
	assets: false,
	chunks: false,
	modules: false,
	reasons: false,
	children: false,
	source: false,
	errors: true,
	errorDetails: false,
	warnings: false,
	publicPath: false
};

const happyPackOptions = {
	verbose: false,
	threads: 4,
	loaders: [{
		loader: 'babel-loader',
		options : {
			presets : [
				"react",
				"es2015",
				"babel-preset-stage-0"
			]
		}
	}],
};

const UglifyJs = () => {
	if (production) {
		return new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			comments: false,
			compress: {
				sequences: true,
				booleans: true,
				loops: true,
				unused: true,
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		});
	}
	return null;
};

const plugins =  [
	UglifyJs(),
	new webpack.NoEmitOnErrorsPlugin(),
	new webpack.DefinePlugin(envs),
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.OccurrenceOrderPlugin()
].filter(t => t);

module.exports = {
	plugins,
	stats
};
