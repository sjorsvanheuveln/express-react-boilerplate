const createError = require('http-errors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// User Datbase & Auth
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// HOT RELOADING ////////////////////////////////////////////
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
// //////////////////////////////////////////////////////////

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/api/users');
const apiRouter = require('./routes/api');
const authRouter = require('./routes/api/authentication');

const app = express();

// Connect Mongoose //
mongoose.connect('mongodb://localhost/express-react', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// // HOT RELOADING ////////
if (process.env.NODE_ENV !== 'production') {
  // console.log('app.js reloading', process.env.NODE_ENV);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
// /////////////////////////
app.use(favicon(path.join(__dirname, 'public/images/favicon/favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'ramdom asdfjkjasdf',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/users', usersRouter);
app.use('/api', apiRouter);
app.use('/api/authentication', authRouter);
app.use('/', indexRouter); // this needs some new errorhandling 5MR-31

// Config Passport
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { error: err });
  next();
});

module.exports = app;
