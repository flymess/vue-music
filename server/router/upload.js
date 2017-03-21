/**
 * Created by Administrator on 2017/3/19.
 */
const express = require('express');
const router = express.Router();
const multer  = require('multer');
const specialApi = require('./controller/special');
const checkToken = require('../middleware/checkToken');
const userApi = require('./controller/user')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'source/')
  },
  filename: function (req, file, cb) {
    let fileFormat = (file.originalname).split(".");
    cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length -1]);
  }
});
const upload = multer({
  storage: storage
});

router.post('/upload',upload.fields([{name: 'file'}]),checkToken,(req, res, next) => {
  let title = req.body.title;
  let content = req.body.content;
  let backgroundImage = req.body.backgroundImage;
  if (backgroundImage == ''){
    backgroundImage = 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
  }
  let musicList = []
  let username = req.body.username

  for (var i = 0;i < req.files['file'].length;i++){
    musicList.push({
      name: req.files['file'][i].originalname.split('.')[0],
      path: req.files['file'][i].path
    })
  }

  userApi.getUserInfo(username).then(function (user) {
    let avatar = user.avatar
    specialApi.upload({
      username: username,
      title: title,
      content: content,
      backgroundImage: backgroundImage,
      musicList: musicList,
      avatar: avatar
    }).then(result => {
      res.status(200).apiSuccess()
    })
      .catch(err => {
        res.send({
          code:-200,
          message: err.toString()
        })
        next(err)
      })
  })


})

router.get('/getSpecial', function (req, res, next) {
  specialApi.getList().then(result => {
    let items = []
    for (var i = 0;i < result.length;i++){
      let json = {
        id: result[i]._id,
        title: result[i].title,
        backgroundImage: result[i].backgroundImage
      }
      items.push(json)
    }
    res.status(200).apiSuccess(items)
  })
    .catch(err => {
      next(err)
    })
})

router.get('/getSpecialDetail', function (req, res, next) {
  specialApi.getSpecialDetail(req.query.id).then(result => {
    let data = {
      username: result.username,
      title: result.title,
      content: result.content,
      backgroundImage: result.backgroundImage,
      avatar: result.avatar
    }
    res.status(200).apiSuccess(data)
  })
    .catch(err => {
      next(err)
    })
})

module.exports = router