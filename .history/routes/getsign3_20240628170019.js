var express = require('express');
var router = express.Router();
var tb_get = require('../util/tb_sign3')
var base64 = require('../util/base64')
/* GET users listing. */
router.post('/', function (req, res, next) {
  // res.send({ data: get(req.body.token, req.body.data) })
  // 将ns转成base64
  console.log("post 提交 getsign" ,req);
  // var data = base64.frombase64(req.body.data)
  // console.log(req.body.token);
  // console.log(data);
    console.log(req.body.token  )
    var s = tb_get(req.body.token)
    console.log(s);
    res.send(s)
});

module.exports = router;
