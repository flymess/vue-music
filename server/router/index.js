/**
 * Created by tao on 2017/3/2.
 */
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Special = require('../models/special');

module.exports = function (app) {
  app.use('/api',require('./userSign'))
  app.use('/api', require('./upload'))
  app.use('/api', require('./profile'))
}
