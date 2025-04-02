var express = require('express');
var router = express.Router();
//kk解密的文件
var kk = require('../util/kakao.js');
// var base64 = require('../util/base64')
/* GET users listing. */
router.post('/', function (req, res, next) {
  // res.send({ data: get(req.body.token, req.body.data) })
  // 将ns转成base64
  console.log("pass");
  var data = req.body.data
  var p = req.body.p
  var s = kk(data,p)
  console.log(s);
  res.send(s)
});

module.exports = router;
