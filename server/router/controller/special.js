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
  }
}