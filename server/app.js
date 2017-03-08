/**
 * Created by tao on 2017/3/1.
 */
const express = require('express')
const app = express()
const index = require('./router/index')
const movie = require('./router/movie')

app.use('/',(req, res) => {
  res.send('Yo!')
})

app.listen(3000,() => {
  console.log('app listening on port 3000.')
})

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/xiang')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('success')
});

app.use('/', index)
app.use('/api', movie)