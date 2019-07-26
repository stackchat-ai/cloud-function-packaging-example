const path = require('path');

module.exports = {
  entry: [
    './src/cloud-functions.ts'
  ],
  externals : {
    'dc': '@stackchat/dynamic-content-toolkit',
    // 'fetch': 'node-fetch' // no need to bundle this either, if used
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json' ]
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'cloud-functions.js',
    path: path.resolve(__dirname, 'dist')
  }
};
