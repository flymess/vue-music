/**
 * Created by Administrator on 2017/3/19.
 */
const express = require('express');
const router = express.Router();
const multer  = require('multer');
const specialApi = require('./controller/special');
const checkToken = require('../middleware/checkToken');
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
  let musicList = []
  let username = req.body.username

  for (var i = 0;i < req.files['file'].length;i++){
    musicList.push({
      name: req.files['file'][i].originalname.split('.')[0],
      path: req.files['file'][i].path
    })
  }

  specialApi.upload({
    username: username,
    title: title,
    content: content,
    backgroundImage: backgroundImage,
    musicList: musicList
  }).then(result => {
    res.status(200).apiSuccess()
  })
    .catch(err => {
      next(err)
      res.send({
        code:-200,
        message: err.toString()
      })
    })
})

module.exports = router