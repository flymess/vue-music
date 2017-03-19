/**
 * Created by Administrator on 2017/3/14.
 */
// const jwt = require('jsonwebtoken');
const jwt = require('jwt-simple');
const app = require('express')();
app.set('jwtTokenSecret','lxzy');

module.exports = function (name) {
  const token = jwt.encode({
    iss: name,
  }, app.get('jwtTokenSecret'))

  return token
}