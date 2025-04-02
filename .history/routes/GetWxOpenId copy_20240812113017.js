var express = require('express');
var router = express.Router();
var axios = require('axios')



 axios.get('https://gmmwlogin.gmmsj.com/v1/account/getLoginSlideCaptcha?appid=791000270&src_code=7&bizType=2&deviceid=v2_DadegXwKp0eK115MPig6K98jBmFhm8HV',
{
  headers:{
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "deviceId=v2_DadegXwKp0eK115MPig6K98jBmFhm8HV; device_id=v2_DadegXwKp0eK115MPig6K98jBmFhm8HV; https_waf_cookie=976784c5-52f3-43ef6cf6e68cf72b8ceff31bed2f8a942dad; JSESSIONID=node0o9gr2weh44ob1140ngep8cwlh53249.node0",
    "Referer": "https://gmmwlogin.gmmsj.com/v1/oauth/register?appid=791000270&state=123&redirect_url=https%3A%2F%2Fwww.gmmsj.com%2Fpcnew%2Fauth%2FloginTransfer&display=redirect&supportacc=undefined",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
}
).then((res)=>{
  console.log(res )
})

/* GET users listing. */
// router.get('/', async function (req, res, next) {
//   // res.send({ data: get(req.body.token, req.body.data) })
//   // 将ns转成base64
// 	const appID= 'wx7672233d209a61e4'
// 	const  AppSecret ='c6798c5eab8a87d3449c9331800cc98d'
//   // console.log(req)
//   let code  = req.query.code
//   console.log(code )
//   var url='https://api.weixin.qq.com/sns/jscode2session'+'?appid=' + appID + '&secret=' + AppSecret + '&js_code=' + code + '&grant_type=authorization_code'
//   await axios.get(url).then(async (re)=>{
//     console.log(re )
//         res.json ({  stuta:true ,  data: re.data.openid } )
//         // return
//   })
   
// });

