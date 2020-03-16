/**
 * sandbox webpack config
 * @type {path.PlatformPath | path}
 */
var path = require('path');
var webpack = require('webpack');
const merge = require('webpack-merge');

//외부 플러그인
var ManifestPlugin = require('webpack-manifest-plugin');

//설정파일
const webpackConfigBase = require('./webpack.config.base');
const webpackConfig = require('./config');

//구분 단계 값
const phase = webpackConfig.commonPhase.environment;

module.exports = merge( webpackConfigBase , {
  mode : 'development',
  devtool: 'inline-source-map',
  plugins : [
    new webpack.DefinePlugin({
      'phase.domain' : JSON.stringify('http://sandbox-test.com'),
      'phase.cdnDomain' : JSON.stringify('http://sandbox-cdn.test.com')
    }),
    new ManifestPlugin({
      writeToFileEmit : true,
      fileName : path.resolve(__dirname, './main/resources/manifestjs-'+phase+'.json'),
    }),
  ]
});
