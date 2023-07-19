var createError = require('http-errors');
require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require('mongoose');
const dbConnect = require("./mongoAtlas");

/*let DB= require('./db');
mongoose.connect(DB.URI, {useUnifiedTopology: true, useUnifiedTopology: true, useNewUrlParser: true});

let DB2= require('./db2');
mongoose.connect(DB.URI, {useUnifiedTopology: true, useUnifiedTopology: true, useNewUrlParser: true});
*/
/*let mongoDB= mongoose.connection;
mongoDB.on('error', console.error.bind(console,'connection Error:'));
mongoDB.once('open',()=>{
  console.log('Database connected Succesfully');
});*/

//Atlas mongo database connection
dbConnect();

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var productsRouter = require('../routes/product');
var employeeRouter = require('../routes/employee');
var projectsRouter = require('../routes/projects');
var contactsRouter = require('../routes/contacts');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productsRouter);
app.use('/employees',employeeRouter);
app.use('/projects',projectsRouter);
app.use('/contact',contactsRouter);

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
