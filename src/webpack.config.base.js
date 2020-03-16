/**
 * 공통 webpack 설정
 */
'use strict'

var path = require('path');
var webpack = require('webpack');
const childProcess = require('child_process');
const glob = require("glob");

const webpackConfig = require('./config');

//외부 플러그인
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//구분 단계 값
const phase = webpackConfig.commonPhase.environment;

//디렉토리 경로
const rootComponentsPath = webpackConfig.commonPath.rootComponentsPath;
const filenamePrefix = webpackConfig.commonPath.filenamePrefix;
const outputPath = webpackConfig.commonPath.outputPath;

//entry 생성 함수
const getEntries = (root, prefix, ptn = '**/app.js') => {
  // 하위폴더에서 app.js 파일을 모두 찾는다
  const files = glob.sync(`${root}/${ptn}`)

  // 엔트리이름과 경로로 구성된 객체를 생성한다
  return files.reduce((entries, file) => {
    // const parentDirectory = path.dirname(file).split(path.sep).pop()

    const filePathSubstr = file.substr(root.length + 1,file.length);
    const filePath = path.dirname(filePathSubstr).split(path.sep)
    const parentDirectory = filePath.join('.')

    const bundleName = `${prefix}.${parentDirectory}`
    entries[bundleName] = file
    return entries
  }, {})
}

module.exports = {
  entry: {
    ...getEntries( rootComponentsPath, filenamePrefix ),
  },
  output: {
    path: path.resolve(__dirname, outputPath),
    publicPath: '/dist/',
    filename: phase === 'dev' ? '[name].js?phase='+phase : '[name].js?phase='+phase+'&cache=[chunkhash]'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  plugins : [
    // new webpack.BannerPlugin({
    //   banner:`
    //       Build Date : ${new Date().toLocaleString("ko-KR" , "yyyy-MM-dd")}
    //       Commit Version : ${childProcess.execSync('git rev-parse --short HEAD')}
    //       Author : ${childProcess.execSync('git config user.name')}
    //   `
    // }),
    new CleanWebpackPlugin(),  //dist 파일 삭제
    new CopyPlugin([{
      from: './node_modules/axios/dist/axios.min.js',
      to: './axios.min.js' // 목적지 파일에 들어간다
    }]),
    new VueLoaderPlugin()
  ],
  externals : {
    axios:'axios'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'CommonPath' : path.resolve(__dirname, './main/webapp/resource/frontEnd/js/common'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  performance: {
    hints: false
  }

}


