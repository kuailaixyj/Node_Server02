var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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
var kakao  = require("./routes/kakao");
var getdrop = require("./routes/getdrop");
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
app.use('/wx', wx);
app.use('/kakao', kakao);
app.use('/getdrop', getdrop);
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
