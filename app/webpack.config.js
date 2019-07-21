var path = require('path');

module.exports = {
  mode: 'development',
  entry: './assets/scripts/app.js',
  output: {
    path: path.resolve(__dirname, './temp/scripts'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      } 
    ]
  }
};
