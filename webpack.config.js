const webpack = require('webpack');
const port = '8080'

module.exports = {
    debug: true,
    devtool: 'eval',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ],
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:' + port,
      'webpack/hot/dev-server',
      "./app/app.js",
      "./app/styles/styles.less"
    ],
    module: {
        loaders: [
					{test: /\.js/, loaders: ['babel'], exclude: /node_modules/ },
					{test: /\.jsx/, loaders: ['babel'], exclude: /node_modules/ },
					{test: /\.css/, loader: 'style-loader!css-loader'},
					{test: /\.less$/, loader:  'style!css!less'},
					{test: /\.json$/, loader: 'json'},
					{test: /\.jpe?g$|\.gif$|\.png$|\.ico$/, loader: 'file?name=[name].[ext]'},
					{test: /\.eot|\.ttf|\.svg|\.woff2?/, loader: 'file?name=[name].[ext]'}
        ]
    },
    output: {
        path: './dist',
        filename: "bundle.js"
    },
    devServer: {
      contentBase: './dist',
      noInfo: true,
      inline: true,
      hot: true
    }
};
