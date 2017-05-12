const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.js',
		'./src/styles/styles.less'
	],
	module: {
		loaders: [
			{ test: /\.js/, loaders: ['babel-loader'], exclude: /node_modules/ },
			{ test: /\.jsx/, loaders: ['babel-loader'], exclude: /node_modules/ },
			{ test: /\.css$/, loaders: ['style-loader', 'css-loader?modules'] },
			{ test: /\.less$/, loaders:	['style-loader','css-loader?modules','less-loader?modules'] },
			{ test: /\.json$/, loader: 'json' },
			{ test: /\.jpe?g$|\.gif$|\.png$|\.ico$/, loader: 'file?name=[name].[ext]' },
			{ test: /\.eot|\.ttf|\.svg|\.woff2?/, loader: 'file?name=[name].[ext]' }
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally

		new webpack.NamedModulesPlugin()
		// prints more readable module names in the browser console on HMR updates
	]
};
