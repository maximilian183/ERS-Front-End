const path = require('path');

module.exports = {
  entry:  [
            './src/components/App.jsx',
            './src/components/ERS_DispatchDetails.jsx',
            './src/components/Topic.jsx',
            './src/index.js'
          ],
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  },
  node: {
   fs: "empty"
  }
};
