var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cookieParser = require('cookie-parser')		// 记得npm 'cookie-parser' 模块
var bodyParser = require('body-parser')			// 记得npm 'body-parser' 模块

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var getsign = require('./routes/getsign')
var getsign2 = require('./routes/getsign2')
var getsign3 = require('./routes/getsign3')
var getsign4 = require('./routes/getsign4')
var getSession = require('./routes/getSession');
var getSession2 = require('./routes/getSession2');
var get_seach = require('./routes/get_seach');
var login = require("./routes/login");
var login2 = require("./routes/login2");
var login3 = require("./routes/login3");
var login4 = require("./routes/login4");
var wx = require("./routes/wx");
var wx2= require("./routes/wx2");
var kakao  = require("./routes/kakao");
var getdrop = require("./routes/getdrop");
var GetWxOpenId =require("./routes/GetWxOpenId");
var GetDecryptByDES = require("./routes/GetDecryptByDES");
var GMM_GetDevice_Id = require("./routes/GMM_GetDevice_Id")
var get_Cq_password = require("./routes/get_CQ_password")
var get_CQ_relname = require("./routes/get_CQ_relname")
var Get_GMM_SM = require("./routes/Get_GMM_SM")
var wx3 = require("./routes/wx3")
var wx4 = require("./routes/wx4")
var DES10086 = require("./routes/DES10086")
var HomePlace = require("./routes/HomePlace")
var test = require("./routes/test")


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/getsign', getsign);
app.use('/getsign2', getsign2);
app.use('/getsign3', getsign3);
app.use('/getsign4', getsign4);
app.use('/getSession', getSession);
app.use('/getSession2', getSession2);
app.use('/get_seach', get_seach);
app.use('/login', login);
app.use('/login2', login2);
app.use('/login3', login3);
app.use('/login4', login4);
app.use('/login5', login4);
app.use('/login6', login4);
app.use('/wx1', wx);
app.use('/wx2', wx2);
app.use('/wx3' , wx3)
app.use('/wx4' , wx4)
app.use('/kakao', kakao);
app.use('/getdrop', getdrop);
app.use('/GetWxOpenId', GetWxOpenId);
app.use('/GetDecryptByDES', GetDecryptByDES);
app.use('/GMM_GetDevice_Id' , GMM_GetDevice_Id)
app.use('/get_Cq_password', get_Cq_password)
app.use('/get_CQ_relname'  ,get_CQ_relname)
app.use('/Get_GMM_SM' , Get_GMM_SM)
app.use('/DES10086' , DES10086)
app.use('/HomePlace', HomePlace)
app.use('/test',test)





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
