var express = require('express');
var router = express.Router();
// var tb_get = require('../util/tb_sign')
// var base64 = require('../util/base64')

var getsign = require('../util/session')

/* GET users listing. */
router.post('/', function (req, res, next) {
  // res.send({ data: get(req.body.token, req.body.data) })
  // 将ns转成base64
  s = getsign()

  res.send(s)
});

module.exports = router;
