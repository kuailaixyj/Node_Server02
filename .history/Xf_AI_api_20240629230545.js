const axios = require('axios');



async function XingHuoapi(str){
    var url = "https://spark-api-open.xf-yun.com/v1/chat/completions"
    var data = {
        "model":"generalv3.5",
        "messages": [ {"role": "user","content": str}]
    }
    console.log(JSON.stringify(data) )
  await axios({
        timeout:10000,
        method: 'post',
        url: url,
        data: JSON.stringify(data),
        headers: {'Content-Type': 'application/json',
                    'Authorization': 'Bearer 893a54c835c5ea2c936b44c1e681aa6b:YWM3MzdlMWJlYWE4YjZmYzQ4NjVlMzc5'}
    }).then( function (response) {
       return response.data.choices[0].message.content
    })
}

 
await XingHuoapi("今天遇到一个BUG exited with code=0 in 6.339 seconds 该怎么办")

// module.exports = get