/**
 * Created by tao on 2017/3/2.
 */
const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
  res.send('Hello Express!')
})

module.exports = router