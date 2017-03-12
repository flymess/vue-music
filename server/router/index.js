/**
 * Created by tao on 2017/3/2.
 */
const express = require('express')
const router = express.Router()
const User = require('../models/user');

module.exports = function (app) {
  app.use('/api',require('./userSign'))
}