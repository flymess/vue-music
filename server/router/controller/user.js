/**
 * Created by Administrator on 2017/3/12.
 */
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Special = mongoose.model('special');

module.exports = {
  create: function (data) {
    return User.findOne({username: data.username})
      .then(result => {
        if(result) {
          return {
            err: true,
            error_code: 500,
            error_message: '用户已存在'
          }
        } else {
          let user = new User(data)
          return user.save()
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  login: function (data) {
    return User.findOne({username: data.username}).exec()
	},
  getUserInfo: function (username) {
    return User.findOne({username: username}).exec()
  },
  updateUserInfo: function (data) {
    return User.findOne({username: data.username})
    .then(result => {
      let _id = result._id;
      result.address = data.data.address
      result.sex = data.data.sex
      User.update({_id: _id}, result).then(data => {
      })
    })
  },
  collecionList: function (id, username) {
    return User.findOne({username: username,$or: [{'collecionList.specialId': id}]})
    .then(result => {
      if (result == null) {
       return Special.findOne({_id: id})
        .then(result => {
          let data = {
            title: '',
            backgroundImage: '',
            specialId: ''
          }
          data.title = result.title
          data.backgroundImage = result.backgroundImage
          data.specialId = id
          return User.update({username: username}, {$push: {collecionList: {
            title: data.title,
            backgroundImage: data.backgroundImage,
            specialId: data.specialId
          }}})
          .then(result => {
            return 0
          })
          .catch(err => {
            console.log(err)
          })
        })
      }else {
       return User.update({username: username},{$pull: {collecionList: {specialId: id}}},{ multi: true })
        .then(result => {
          return 1
        })
        .catch(err => {
          console.log(err)
        })
      }
    })
  }
}
