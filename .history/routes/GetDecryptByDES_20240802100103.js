var express = require('express');
var router = express.Router();
var crypto = require('crypto');


/* GET users listing. */
router.post('/', function (req, res, next) {

  // var s = get_seach(req.body.phone, req.body.publishSession, req.body.seach)
 let phone = req.body.phone
 function decryptByDES(phone){
	if (phone == undefined) {
		console.log("DES解密传入非法参数！");
		return;
	}
	var ciphertext = phone.substring(13);
	var key = phone.substring(5,13);
	var keyHex = crypto.enc.Utf8.parse(key);
	var decrypted = crypto.DES.decrypt({
		ciphertext: crypto.enc.Hex.parse(ciphertext)
	}, keyHex, {
		mode: crypto.mode.ECB,
		padding: crypto.pad.Pkcs7
	});
	var result_value = decrypted.toString(crypto.enc.Utf8);
	return result_value;
}
 
 
  console.log(s);
  res.send(JSON.stringify(s))
});


module.exports = router;
