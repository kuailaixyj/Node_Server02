var express = require('express');
var router = express.Router();
var axios = require('axios')
/* GET users listing. */
router.get('/', async function (req, res, next) {
  // res.send({ data: get(req.body.token, req.body.data) })
  // 将ns转成base64
	const appID= 'wx7672233d209a61e4'
	const  AppSecret ='38664d62f4128aad1b83b1db072ae32b'
  // console.log(req)
  let code  = req.query.code
  console.log(code )
  var url='https://api.weixin.qq.com/sns/jscode2session'+'?appid=' + appID + '&secret=' + AppSecret + '&js_code=' + code + '&grant_type=authorization_code'
  await axios.get(url).then(async (re)=>{
    console.log(re )
        res.json ({  stuta:true ,  data: re.data.openid } )
        // return
  })
   
});

module.exports = router;
