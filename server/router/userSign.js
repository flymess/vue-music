// /**
//  * Created by tao on 2017/3/2.
//  */
const express = require('express')
const router = express.Router()
const sha1 = require('sha1')
const userApi = require('./controller/user');
const createToken = require('../middleware/createToken');
const checkToken = require('../middleware/checkToken');

router.post('/userSign', (req, res ,next) => {
  let username = req.body.username;
  let password = req.body.password;
  let avatar = 'https://uploadbeta.com/api/pictures/random/?key=推女郎'
  password = sha1(password)

  userApi.create({
    username: username,
    password: password,
    avatar: avatar
  }).then(result=> {
    if (result.err) {
      res.apiError(result)
    } else {
      res.status(200).apiSuccess()
    }
  })
    .catch(err => {
      next(err)
      res.send({
        code: -200,
        message: err.toString()
      })
    })

},function (err, ret) {
  if (err) return res.apiError(err);
  res.apiSuccess(ret)
})

router.get('/userinfo',checkToken ,(req, res, next) => {
})

router.post('/login', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  password = sha1(password)

  userApi.login({
    username: username,
    password: password
  }) .then(user => {
    if (user && user.password === password) {
      res.status(200).apiSuccess({
        token: createToken(username)
      })
    } else {
      res.apiError({
        error_code: 500,
        error_message: '用户名或密码错误'
      })
    }
  })
    .catch(err => {
      next(err)
      res.send({
        code: -200,
        message: err.toString()
      })
    })

})

module.exports = router