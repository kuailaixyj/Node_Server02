var express = require('express');
var router = express.Router();
// var tb_get = require('../util/tb_sign')
// var base64 = require('../util/base64')
// var 
var getsign = require('../util/tb_do')

/* GET users listing. */
router.post('/', function (req, res, next) {
  // res.send({ data: get(req.body.token, req.body.data) })
  // 将ns转成base64
  // s = getsign()


  // console.log(req.body.data);
  var s = getsign(req.body.token, req.body.data)
  console.log(s);
  res.send(JSON.stringify(s))
});


module.exports = router;
