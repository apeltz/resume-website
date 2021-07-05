const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: {
		app: "./src/app/index.js",
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js/,
				use: [{ loader: "babel-loader" }],
				exclude: /node_modules/,
			},
			{
				test: /\.jsx/,
				use: [{ loader: "babel-loader" }],
				exclude: /node_modules/,
			},
			{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "less-loader" },
				],
			},
			{ test: /\.json$/, use: [{ loader: "json" }] },
			{
				test: /\.jpe?g$|\.gif$|\.png$|\.ico$/,
				use: [{ loader: "file?name=[name].[ext]" }],
			},
			{
				test: /\.eot|\.ttf|\.svg|\.woff2?/,
				use: [{ loader: "file?name=[name].[ext]" }],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		publicPath: "/",
	},
	devtool: "source-map",
	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, "dist"),
		transportMode: "ws",
		injectClient: false,
		disableHostCheck: true,
		// public: "http://localhost:8080",
		publicPath: "/",
		// port: 8080,
	},
};
