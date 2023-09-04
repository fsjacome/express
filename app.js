var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var rest_cliente= require('./routes/rest_cliente');
var rest_producto= require('./routes/rest_producto');
var rest_orden= require('./routes/rest_orden');
var rest_detalleorden= require('./routes/rest_detalleorden');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rest/cliente', rest_cliente);
app.use('/rest/producto', rest_producto);
app.use('/rest/orden', rest_orden);
app.use('/rest/detalleorden', rest_detalleorden);

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
