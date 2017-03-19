/**
 * Created by Administrator on 2017/3/19.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let specialSchema = new Schema({
  username: String,
  title: String,
  content: String,
  backgroundImage: String,
  musicList: Array
})

let special = mongoose.model('special', specialSchema);

module.exports = special