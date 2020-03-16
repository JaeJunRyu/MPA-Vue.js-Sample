/**
 * 공통 환경설정 항목
 */
'use strict'

var path = require('path');

module.exports = {
  //공통 path
  commonPath : {
    rootComponentsPath : "./main/webapp/resource/frontEnd/components",
    filenamePrefix : "mticket",
    outputPath : "./main/webapp/resource/dist"
  },
  //서버별 실행 단계
  commonPhase : {
    environment : process.env.NODE_ENV || 'dev'
  },



}
