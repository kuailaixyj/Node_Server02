import axios from "axios";
var url = "https://spark-api-open.xf-yun.com/v1/chat/completions"
const instance = axios.create({
    baseURL: "https://spark-api-open.xf-yun.com/v1/chat/completions",
    timeout: 10000,
    headers: {'Content-Type': 'application/json',
                'Authorization': 'Bearer key123456:YWM3MzdlMWJlYWE4YjZmYzQ4NjVlMzc5'}
  });




module.exports = get