const port = '8080'

module.exports = {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:' + port,
      "./app/app.js",
    ],
    module: {
        loaders: [
            {
              test: /\.css$/,
              include: __dirname + '/app',
              loaders: "style!css"
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
      hot: false
    }
};
