var express = require('express');
var router = express.Router();
var CryptoJS = require('crypto-js');
function encryptByDES(message) {
  var keyHex = CryptoJS.enc.Utf8.parse("1234567890");
  var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

router.post('/', function (req, res, next) {
  // var s = get_seach(req.body.phone, req.body.publishSession, req.body.seach)
    let key = req.body.key
    console.log(key )

   res.json({data:encryptByDES(key) })
});
module.exports = router;
