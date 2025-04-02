var express = require('express');
var router = express.Router();
var optlib = require('../otplib/index.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  const { code }  = req.query 
  console.log(code)
  let token = optlib.authenticator.generate(code)
  console.log(token )
  res.json({token: token})
});

module.exports = router;
