var express = require('express');
var router = express.Router();
var tb_get = require('../util/tb_sign')
var base64 = require('../util/base64')
/* GET users listing. */
router.post('/', function (req, res, next) {
  // res.send({ data: get(req.body.token, req.body.data) })
  // 将ns转成base64
  console.log("getsign");
  var data = base64.frombase64(req.body.data)
  console.log(req.body.token);
  console.log(data);
  var s = tb_get(req.body.token, data)
  console.log(s);
  res.send(s)
});

module.exports = router;
