var express = require('express');
var router = express.Router();
var crypto = require('crypto-js');
/* GET users listing. */
// var e="513822199111070470"
// var t = "1009191557000000"
// identity 加密
 N = function(e, t) {
  var n = crypto.enc.Utf8.parse(e);
  n = crypto.enc.Base64.stringify(n);
  var t = crypto.enc.Utf8.parse(t)
    , i = crypto.enc.Utf8.parse("")
    , r = crypto.AES.encrypt(n, t, {
      iv: i,
      mode: crypto.mode.ECB,
      padding: crypto.pad.Pkcs7
  })
    , o = crypto.enc.Base64.stringify(r.ciphertext);
  return o
}

// const parsedUrl = new URL(nonUtf8Url);

console.log(decodeURI('%C1%D6%CF%FE%D1%C7')  )



router.get('/', function (req, res, next) {
      let {data,key} = req.query   
      console.log(data,key )
      data =decodeURI(data)
      console.log( data ,key )
      res.json({data:  N ( data,key)})
});


module.exports = router;
