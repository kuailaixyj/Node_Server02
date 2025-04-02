var express = require('express');
var router = express.Router();
var axios = require('axios')
/* GET users listing. */
router.get('/', async function (req, res, next) {
  var deviceId
function generateUUID (len, radix) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    const uuid = []
    radix = radix || chars.length
  
    if (len) {
      // Compact form
      for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
    } else {
      // rfc4122, version 4 form
      let r
  
      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
      uuid[14] = '4'
  
      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16
          uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
        }
      }
    }
  
    return uuid.join('')
  }
  function encodeUuid (str) {
    let uuidStr = ''
    // 5,7,9,10,13  gwp01
    const list = str.split('')
    list[4] = 'g'
    list[6] = 'w'
    list[8] = 'p'
    list[9] = '0'
    list[12] = '1'
    uuidStr = list.join('')
    return uuidStr
  }
function getDeviceId () {
    if (deviceId && deviceId !== '') {
      return deviceId
    } else {
      deviceId =''
      const expires_date = new Date('2066/01/01') // deviceid在cookie过期时间50年
      if (!deviceId || deviceId === '') { // 没有deviceId,写入cookie
        deviceId = 'v2_' + encodeUuid(generateUUID(32))
        return deviceId
    }
    }
}

   return getDeviceId()
   
});

module.exports = router;
