var express = require('express');
var router = express.Router();
var axios = require('axios');
// var tb_get = require('../util/tb_sign')
// var base64 = require('../util/base64')
/* GET users listing. */
router.post('/', async function (req, res, next) {
    
//   var phone = req.body.phone
//   var s =  await axios.get("https://cx.shouji.360.cn/phonearea.php?number="+phone)
//   console.log(s.data.data)
//   if(s.data.data.city !=""){
//     data = s.data.data.city
//   }else{
//     data = s.data.data.province
//   }
//   res.json({data})
    var phone = req.body.phone
  var data
  try {
        var s =  await axios.get("https://zddd.asia/666/get.php?phone="+phone)
      if(s.data[0].city_county_simple!="")
      {
        data = s.data[0].city_county_simple
      }else{
        data =s.data[0].provice_simple
      }
      res.json({data})
  } catch (error) {
    res.json({data:''})
  }
  
  
  
});

module.exports = router;
