var express = require('express');
var router = express.Router();
var crypto = require('crypto-js');
/* GET users listing. */
var e="513822199111070470"
var t = "1009191557000000"
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
console.log( N(e,t) )