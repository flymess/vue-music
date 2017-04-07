const express = require('express')
const router = express.Router()
const checkToken = require('../middleware/checkToken');
const userApi = require('./controller/user');


router.post('/profile', checkToken, (req, res, next) => {
    if(req.body.username){
        userApi.updateUserInfo({
            username: req.body.username,
            data: {
                address: req.body.address,
                sex: req.body.sex
            }
        })
        .then(() => {
            res.status(200).apiSuccess()
        })
    }else{
        res.status(400).apiError('用户未登录')
    }
})

module.exports = router
