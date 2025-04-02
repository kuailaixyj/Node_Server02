var express = require('express');
var router = express.Router();
// var crypto = require('crypto-js');
const CryptoJS = require('crypto-js');  
var REG_RSA_PUBLIC_KEY_PEM="-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4GbvDjivOlNZLcJcQ9Ue0FRbi1KZi1MGTUgXgQ/u/cdknF54Gg4BTSrTreWSuHI0TNJGSRxCR65Nm1zbK912SpT4invM721hZfrgKKmSITGsqVLuJM5rWQa5taOyRzFmzjgY7qDif9mF6LTMtw2i41UokAeS4vC4QSCkLQNZrlwIDAQAB-----END PUBLIC KEY-----";
function encryptString(plainTxt)
{
    //return plainTxt;
    var encrypt = window.JSEncrypt;
    encrypt.setPublicKey(REG_RSA_PUBLIC_KEY_PEM);
    return encrypt.encrypt(plainTxt);
}


// /* GET users listing. */
// router.post('/', function (req, res, next) {

//   // var s = get_seach(req.body.phone, req.body.publishSession, req.body.seach)
//       let customerId = req.body.customerId
//       console.log(customerId)
//       function decryptByDES(phone){
//         if (phone == undefined) {
//           console.log("DES解密传入非法参数！");
//           return;
//         }
//         var ciphertext = phone.substring(13);
//         var key = phone.substring(5,13);
//         var keyHex = crypto.enc.Utf8.parse(key);
//         var decrypted = crypto.DES.decrypt({
//           ciphertext: crypto.enc.Hex.parse(ciphertext)
//         }, keyHex, {
//           mode: crypto.mode.ECB,
//           padding: crypto.pad.Pkcs7
//         });
//         var result_value = decrypted.toString(crypto.enc.Utf8);
//         return result_value;
//       }

//   res.json({data:decryptByDES(customerId) })
// });
// module.exports = router;



