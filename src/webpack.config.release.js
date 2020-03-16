/**
 * cbt webpack config
 * @type {path.PlatformPath | path}
 */
'use strict'

var path = require('path');
var webpack = require('webpack');
const merge = require('webpack-merge');

//외부 플러그인
var ManifestPlugin = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');

//설정파일
const webpackConfigBase = require('./webpack.config.base');
const webpackConfig = require('./config');

//구분 단계 값
const phase = webpackConfig.commonPhase.environment;

module.exports = merge( webpackConfigBase , {
  mode : 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 콘솔 로그를 제거한다
          },
          // /sourceMap : true
        }
      })
    ],
  },
  plugins : [
    new webpack.DefinePlugin({
      'phase.domain' : JSON.stringify('http://release-test.com'),
      'phase.cdnDomain' : JSON.stringify('http://release-cdn.test.com')
    }),
    new ManifestPlugin({
      writeToFileEmit : true,
      fileName : path.resolve(__dirname, './main/resources/manifestjs-'+phase+'.json'),
    })
  ]
});
