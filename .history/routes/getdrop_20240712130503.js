var express = require('express');
var router = express.Router();
var getdrop = require('../util/getdrop')
/* GET users listing. */
router.post('/', function (req, res, next) {
  // res.send({ data: get(req.body.token, req.body.data) })
  // 将ns转成base64
  // s = getsign()
  // console.log(req.body.data);
  var s = getdrop(req.body.token,  req.body.seach)
  console.log(s);
  res.send(JSON.stringify(s))
});


module.exports = router;
