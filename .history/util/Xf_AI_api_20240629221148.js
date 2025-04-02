import axios from "axios";
var url = "https://spark-api-open.xf-yun.com/v1/chat/completions"
const instance = axios.create({
    baseURL: "https://spark-api-open.xf-yun.com/v1/chat/completions",
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });




module.exports = get