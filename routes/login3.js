var express = require('express');
var router = express.Router();
var tb_get = require('../util/tb_sign')
var base64 = require('../util/base64')
var db = require('../util/mysql_query')
/* GET users listing. */
router.get('/', async function (req, res, next) {
  // res.send({ data: get(req.body.token, req.body.data) })
  // 将ns转成base64
  console.log("getsign");
  console.log(req.query.device)
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let sql
  if (req.query.device) {

    sql = "SELECT * FROM `tb_login` WHERE `device` LIKE ? AND `IP` LIKE ?";
    var result = await db.query(sql, [req.query.device, ip]).catch(function (err) { console.log("查询出错"); res.send(err) });
    if (result.length > 0) {
      console.log("查询到该设备");
      console.log(result[0].id);
      sql = "UPDATE `tb_login` SET `date` = NOW() WHERE `id` =?";
      var result = await db.query(sql, [result[0].id]).catch(function (err) { console.log("更新出错"); res.send(err) });
      res.json({ state: 1, data: "ok" })
    } else {
      console.log("暂未查询到该设备");
      sql = "INSERT INTO `tb_login` (`id`, `device`, `date`, `IP`) VALUES (NULL, ?, NOW(), ?);"
      var result = await db.query(sql, [req.query.device, ip]).catch(function (err) { console.log("插入出错"); res.send(err) });
      res.json({ state: 1, data: "ok" })
    }

  }

});

module.exports = router;
