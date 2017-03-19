/**
 * Created by Administrator on 2017/3/14.
 */
const jwt = require('jwt-simple');
const app = require('express')();
const jwt_decode = require('jwt-decode')

module.exports = function (req, res, next) {
  var token = (req.body && req.body.token) || (req.query && req.query.token) || req.headers['x-access-token'];
  if (token){
    try{
      let decoded = jwt_decode(token).iss
      req.body.username = decoded
      next()
    }catch (err){
      console.log(err)
      return next()
    }
  }else {
    next()
  }
}