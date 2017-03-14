/**
 * Created by Administrator on 2017/3/14.
 */
const jwt = require('jwt-simple');

module.exports = function (req, res, next) {
  var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
  if (token){
    try{
      let decoded = jwt.decode(token, app.get('jwtTokenSecret'))
      console.log(decoded)
    }catch (err){
      return next()
    }
  }else {
    next()
  }
}