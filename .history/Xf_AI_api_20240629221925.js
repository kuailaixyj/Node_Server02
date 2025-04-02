const axios = require('axios');
var url = "https://spark-api-open.xf-yun.com/v1/chat/completions"
// const instance = axios.create({
//     baseURL: "https://spark-api-open.xf-yun.com/v1/chat/completions",
//     timeout: 10000,
//     headers: {'Content-Type': 'application/json',
//                 'Authorization': 'Bearer key123456:YWM3MzdlMWJlYWE4YjZmYzQ4NjVlMzc5'}
//   });


var data = {
    "model":"generalv3.5",
    "messages": [
        {
            "role": "user",
            "content": "来一个只有程序员能听懂的笑话"
        }
    ]
}
var result = await axios.post(url , data  , {
        timeout: 10000,
    headers: {'Content-Type': 'application/json',
                'Authorization': 'Bearer key123456:YWM3MzdlMWJlYWE4YjZmYzQ4NjVlMzc5'}
  
})
console.log( result )
 


// module.exports = get