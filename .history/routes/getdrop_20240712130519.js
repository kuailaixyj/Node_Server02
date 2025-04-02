var express = require('express');
var router = express.Router();
var getdrop = require('../util/getdrop')
/* GET users listing. */
router.post('/', function (req, res, next) {
  var s = getdrop(req.body.token,  req.body.data)
  console.log(s);
  res.send(JSON.stringify(s))
});


module.exports = router;
