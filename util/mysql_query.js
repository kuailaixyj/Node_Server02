const db = require('../util/mysql')
let query = (sql, arr) => {
  return new Promise((resolve, rejects) => {
    db.query(sql, arr, async function (err, res) {
      if (err) {
        console.log("mysql 查询出错");
        console.log(err);
        rejects(err)
      }
      resolve(res)
    })
  })
}
module.exports = {
  query
}