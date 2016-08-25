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
            {
              test: /\.less$/,
              include: __dirname + '/app',
              loader: "style-loader!css-loader!less-loader"
            },
            {
              test: /\.js$/,
              include: __dirname + '/app',
              loaders: ['babel'],
            }
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
