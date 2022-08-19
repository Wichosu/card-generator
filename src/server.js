const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('../routes/index');

//Create express application object
const app = express();

//Set up mongoose connection.
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://Wicho:Wicho@cluster0.kcgclqy.mongodb.net/card_generator?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));


app.use('/', indexRouter);

//Catch 404 and foward error handler
app.use((req, res, next) => {
  next(createError(404));
});

//error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development'? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;