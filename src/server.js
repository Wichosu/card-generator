const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

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