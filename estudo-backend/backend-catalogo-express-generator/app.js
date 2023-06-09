var express = require('express');
var app = express();

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Conexão banco de dados
const Conn = require('./database/config')
Conn()

// Models
require('./model/Movies')
require('./model/Assinantes')

// Routes
var indexRouter = require('./routes/index-route');
var moviesRouter = require('./routes/movies-route')
var assinanteRouter = require('./routes/assinantes-route')

// Cria um prefixo para as rotas
app.use('/', indexRouter);
app.use('/movies', moviesRouter)
app.use('/assinantes', assinanteRouter)

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

// 
