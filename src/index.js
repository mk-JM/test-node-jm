const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const _ = require('lodash');
const mongoose = require('mongoose');
const http = require('http');
const indexRouter = require('./routes/index');
const createError = require('http-errors');
const { DB_PORT, DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const app = express();

// Middlewares
app.use(express.json());  

// Routes
app.use('/', indexRouter);

// error handling
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('Error PRUEBA');
});

// mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

const port = process.env.APP_PORT || '3005';
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
module.exports = app;
