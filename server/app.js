/**
 * Created by tao on 2017/3/1.
 */
const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const user = require('./router/userSign');
const captchapng = require('captchapng');
const session = require('express-session');
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

//响应请求
function extendAPIOutput(req, res, next) {
  res.apiSuccess = function (data) {
    res.json({
      status: 'OK',
      result: data
    })
  }

  //响应API出错结果
  res.apiError = function (err) {
    res.json({
      status: 'OK',
      error_code: err.error_code || 'UNKNOWN',
      error_message: err.error_message || err.toString()
    })
  }

  next()
}

//code=出错代码, msg=出错误描述信息
function createApiError(code, msg) {
  var err = new Error(msg);
  err.error_code = code;
  err.error_message = msg;
  return err;
}

function apiErrorHandle (err, req, res, next) {
  //如果有res.apiError()则使用其来输出错误信息
  if (typeof res.apiError === 'function') {
    return res.apiError(err);
  }

  next()
}

app.use(extendAPIOutput);
app.use(apiErrorHandle);

app.use(cors({
  origin:['http://localhost:8080'],
  methods:['GET','POST'],
  alloweHeaders:['Conten-Type', 'Authorization']
}));

const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/xiang')


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('success')
});

require('./router')(app)

app.listen(3000,() => {
  console.log('app listening on port 3000.')
})