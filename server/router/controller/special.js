/**
 * Created by Administrator on 2017/3/19.
 */
const mongoose = require('mongoose');
const Special = mongoose.model('special');

module.exports = {
  upload: function (data) {
    let item = new Special(data)
    return item.save().then((result) => {

    }).catch((err) => {
      console.log(err)
    })
  },
  getList: function () {
    return Special.find({}).then(result => {
      return result
    },err => {
      console.log(err)
    })
  },
  getSpecialDetail: function (id) {
    return Special.findOne({_id: id})
      .then(result => {
        return result
      },err => {
        console.log(err)
      })
  },
  getSpecialMusicList: function (id) {
    return Special.findById({_id: id})
      .then(result => {
        return result.musicList
      },err => {
        console.log(err)
      })
  }
}