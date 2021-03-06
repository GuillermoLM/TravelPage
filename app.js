var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require("hbs");
var hbsUtils = require("hbs-utils")(hbs);
var ExpressSessions = require("express-session");
var flash = require("connect-flash");
var Logger = require("./configuration/winston");
var hbsEmail = require("nodemailer-express-handlebars");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginFlash = require("./routes/login_flash");
var integration = require("./routes/integration");

var app = express();

//view engine partials
hbsUtils.registerPartials(`${__dirname}/views/partials`);
hbsUtils.registerWatchedPartials(`${__dirname}/views/partials`);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(ExpressSessions({
  secret:"GeekhubsAcademy",
  name: "SesionGeek",
  resave: true,
  saveUninitialize: true
}));

app.use(flash());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/components",express.static(`${__dirname}/public/components`));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/login-flash", loginFlash);
app.use("/integration", integration);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
  res.render('nFound',{layout:"layout-small"});
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
