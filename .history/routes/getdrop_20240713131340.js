var express = require('express');
var router = express.Router();
var getdrop = require('../util/getdrop')
/* GET users listing. */
router.post('/', function (req, res, next) {
  if(req.body.type==1){
    var s = getdrop(req.body.token,  req.body.page)
  }else{
    var  s=getdrop(req.body.token, 1 , req.body.type , req.body.data)
  } 

  console.log(s);
  res.send(JSON.stringify(s))
});


module.exports = router;
