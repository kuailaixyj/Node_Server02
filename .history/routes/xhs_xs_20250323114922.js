var express = require('express');
var router = express.Router();
var Pdd = require('../util/Pdd.js');

router.get('/', function (req, res, next) {
  // 使用一个标志来确保只发送一次响应
  let responseSent = false;
  
  try {
    let type = req.query.type;
    if(type == undefined || type == 'undefined') {
      type = 0;
    }

    // 创建一个模拟的 window 对象
    global.window = {
      document: {
        addEventListener: function() {},
        removeEventListener: function() {},
        location: {
          href: 'http://localhost'
        }
      }
    };
    
    global.navigator = {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36'
    };
    
    global.location = global.window.document.location;

    let data;
    try {
      // 同步调用，不使用 await
      if (type == 0) {
        data = Pdd.Getinit();
      } else {
        data = Pdd.GetA2();
      }
    } catch (innerError) {
      console.error("获取数据时出错:", innerError);
      // 清理全局变量
      cleanupGlobals();
      
      if (!responseSent) {
        responseSent = true;
        return res.status(500).json({ error: "获取数据失败" });
      }
      return;
    }

    // 清理全局变量
    cleanupGlobals();
    
    // 检查数据是否有效
    if (!data) {
      if (!responseSent) {
        responseSent = true;
        return res.json({ data: {} });
      }
      return;
    }
    
    // 使用 Express 的标准响应方法
    if (!responseSent) {
      responseSent = true;
      return res.json({ data: data });
    }
  } catch (error) {
    console.error("处理路由时出错:", error);
    // 清理全局变量
    cleanupGlobals();
    
    // 使用 Express 的标准错误响应方法
    if (!responseSent) {
      responseSent = true;
      return res.status(500).json({ error: "server error" });
    }
  }
  
  // 辅助函数：清理全局变量
  function cleanupGlobals() {
    if (global.window) delete global.window;
    if (global.navigator) delete global.navigator;
    if (global.location) delete global.location;
  }
});

module.exports = router;
