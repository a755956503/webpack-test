var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.base');
webpack(config, (err, stats) => {
  console.log('err', err);
  console.log('stats', stats.toJson().errors);
})