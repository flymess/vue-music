/**
 * Created by Administrator on 2017/3/12.
 */
const mongoose = require('mongoose');
const User = mongoose.model('User');

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
	}
}