var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Router 정의
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var restapiRouter = require('./routes/restapi');
//var dbApiRouter = require('./db/api');
var mongooseDBRouter = require('./db/mongooseDB');
//var loginRouter = require('./routes/login');
//mongoDB Atlas Connection
const db = require('./db/mongooseDB');

//JsonWebToken
const jwt = require('jsonwebtoken');

var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//endpoint 정의
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/restapi', restapiRouter);
//app.use('/dbtest',dbApiRouter);
app.use('/mongooseDB',mongooseDBRouter);
//app.use('/login', loginRouter);

//DB Initialize
//db.initialize();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
