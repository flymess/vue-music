/**
 * Created by Administrator on 2017/3/12.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {
    unique: true,
    type: String
  },
  password: String,
  avatar: String,
  address: Array,
  sex: Number,
  collecionList: [
      {
        title: String,
        backgroundImage: String,
        specialId: {type: String}
    }
  ]
},{
  timestamps: true
})

let User = mongoose.model('User', UserSchema);

module.exports = User
