const axios = require('axios');
var url = "https://spark-api-open.xf-yun.com/v1/chat/completions"
var data = {
    "model":"generalv3.5",
    "messages": [ {"role": "user","content": "来一个只有程序员能听懂的笑话"}]
}
console.log(JSON.stringify(data) )
axios({
    timeout:10000,
    method: 'post',
    url: url,
    data: JSON.stringify(data),
    headers: {'Content-Type': 'application/json',
                'Authorization': 'Bearer 893a54c835c5ea2c936b44c1e681aa6b:YWM3MzdlMWJlYWE4YjZmYzQ4NjVlMzc5'}
}).then( function (response) {
    // console.log(response.data )
//    if(response.data.messages =='Success' ){
    // console.log("api 调用成功" )
    console.log(response.data.choices[0].message.content)
//    }

})

setTimeout(()=>{},5999)

// axios.post(url , data  , {
//         timeout: 10000,
//     headers: {'Content-Type': 'application/json',
//                 'Authorization': 'Bearer key123456:YWM3MzdlMWJlYWE4YjZmYzQ4NjVlMzc5'}
  
// }).then((res)=>{
//     console.log(res )

// }).catch( (err)=>{
//     console.log(err )
// })

 


// module.exports = get