const mysql = require('mysql')





const db = mysql.createPool({

  host: '49.235.121.50',
  // 用户名
  user: 'login',
  // 密码
  password: 'login',
  // 数据码名
  database: 'login',
})
// let sql = "SELECT * FROM `employee`"
// db.query(sql, (err, result) => {
//   console.log(result);
// })


module.exports = db