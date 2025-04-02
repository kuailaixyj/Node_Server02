var express = require('express');
var router = express.Router();
var xhs = require('../util/xhs_xs');

router.get('/', function (req, res, next) {

  try {
    const {cook , c, a }  =req.query
    console.log(cook ,c,a )
    res.send(xhs(cook,c,a))
    return
  } catch (error) {
    res.send({'data':'上传数据出错'})
  }

});

module.exports = router;
