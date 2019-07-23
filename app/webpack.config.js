var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    App: './assets/scripts/app.js',
    Vendor: './assets/scripts/Vendor.js',
  },
  output: {
    path: path.resolve(__dirname, './temp/scripts'),
    filename: '[name].js',
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
