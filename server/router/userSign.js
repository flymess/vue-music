// /**
//  * Created by tao on 2017/3/2.
//  */
const express = require('express')
const router = express.Router()
const sha1 = require('sha1')
const userApi = require('./controller/user');

router.post('/userSign', (req, res ,next) => {
  let username = req.body.username;
  let password = req.body.password;
  let avatar = 'http://imgsrc.baidu.com/forum/pic/item/5bf3aacc7cd98d101a6ee0b9283fb80e7aec90aa.jpg'
  password = sha1(password)

  userApi.create({
    username: username,
    password: password,
    avatar: avatar
  }).then(result=> {
    if (result.err) {
      console.log(result)
      res.status(10000)
        .send({
          message: result.message
        })
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

module.exports = router