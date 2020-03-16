/**
 * local webpack config
 * @type {path.PlatformPath | path}
 */
'use strict'

var path = require('path');
var webpack = require('webpack');
const merge = require('webpack-merge');

var ManifestPlugin = require('webpack-manifest-plugin');

const webpackConfigBase = require('./webpack.config.base');
const webpackConfig = require('./config');

//구분 단계 값
const phase = webpackConfig.commonPhase.environment;
const outputPath = webpackConfig.commonPath.outputPath;

module.exports = merge( webpackConfigBase , {
  mode: 'development',
  devtool: 'inline-source-map',
  // devtool: '#eval-source-map'
  devServer: {
    contentBase : path.resolve(__dirname, outputPath),
    //historyApiFallback: true,
    overlay: true,                   //에러 감지후 브라우저에 출력
    // compress: true,                   //gzip 옵션
    publicPath: '/resource/dist',
    // host: "0.0.0.0",
    stats: 'errors-only',
    port: 3000,
    proxy: {
      "**": "http://localhost:8080"
    }
  },
  plugins : [
    new webpack.DefinePlugin({
      'phase.domain' : JSON.stringify('http://dev-test.com'),
      'phase.cdnDomain' : JSON.stringify('http://dev-cdn.test.com')
    }),
    new ManifestPlugin({
      writeToFileEmit : true,
      fileName : path.resolve(__dirname, './main/resources/manifestjs-'+phase+'.json'),
    })
  ]
});
