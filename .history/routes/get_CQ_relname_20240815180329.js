var express = require('express');
var router = express.Router();
var base64 = require('../util/base64')

var CryptoJS = require('crypto-js');
var westone_appid = 'Web-REG';
var westone_sdk_appid = 'Web-REG'; // wstsdk加密专用
var westone_license = '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';
var westone_uid = '';
var westone_starttime = '';
var westone_endtime = '';
var operationModel = 1; //当前熔断状态
var passportIdAuth = ''; //补填监护人调用encrypt_with_oauth_token_batch方法时需要，从user/register/ueGetTutorPassportId.jsonp获取
// java aes ecb hex 加密
// 内容：westone哈哈哈
// KEY：1234567890abcdef
// 结果：7662698AEC050E0DB745DBF340E314AF02DEC5652C0215F93AF69F009F0F6D58
// function urlencode(str) {
//  str = (str + '').toString();
//  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
// }
function encrypt_aes(content, key) {
    key = CryptoJS.enc.Utf8.parse(key);
    content = CryptoJS.enc.Utf8.parse(content);
    var encryptResult = CryptoJS.AES.encrypt(content, key, {
        //iv: key,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    var ret = encryptResult.ciphertext.toString().toUpperCase(); //hex
    // var ret = encryptResult.toString().toUpperCase(); //base64
    return ret;
}

const parsedUrl = new URL(nonUtf8Url);
router.get('/', function (req, res, next) {
      let {data,key} = req.query   
      data =encodeURIComponent(data)
      console.log( data ,key )
       res.json({data: encrypt_aes( data,key)})
});


module.exports = router;
