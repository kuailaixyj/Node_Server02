var express = require('express');
var router = express.Router();
// var tb_get = require('../util/tb_sign')
// var base64 = require('../util/base64')
// var 
var get_seach = require('../util/seach')

/* GET users listing. */
router.post('/', function (req, res, next) {
  // res.send({ data: get(req.body.token, req.body.data) })
  // 将ns转成base64
  // s = getsign()
  // console.log(req.body.data);
  var s = get_seach(req.body.token, req.body.publishSession, req.body.seach)
  console.log(s);
  res.send(JSON.stringify(s))
});


module.exports = router;
